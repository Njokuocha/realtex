<?php

namespace App\Http\Controllers;

use App\Events\NewNotification;
use App\Events\ProductChange;
use App\Models\Notification;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function getSales()
    {
        return Sale::with('user')->orderBy('created_at', 'desc')->get()->groupBy('sale_batch_id');
        // return Sale::with('user')->orderBy('created_at', 'desc')->groupBy('sale_batch_id')->get();
    }

    public function deleteSale(Sale $sale)
    {
        $sale->delete();
        $newSales = Sale::all();
        return response()->json([
            'msg' => 'Deleted Successfully',
            'status' => true,
            'newSales' => $newSales
        ]);
    }

    public function addSale(Request $request)
    {
        $inputs = $request->validate([
            'customer' => 'required|string',
            'product.*' => 'required|string|exists:products,name',
            'amount.*' => 'required|numeric|min:0',
            'quantity.*' => 'required|integer'
        ]);

        $batchId = Str::uuid();

        $customer = $request->input('customer');
        $products = $request->input('product');
        $product_ids = $request->input('product_id');
        $prices = $request->input('amount');
        $quantities = $request->input('quantity');

        $lowProductCount = 0;
        
        foreach($products as $index => $product)
        {
            Sale::create([
                'user_id' => Auth::user()->id,
                'customer' => $customer,
                'sale_batch_id' => $batchId,
                'product' => $product,
                'amount' => $prices[$index],
                'quantity' => $quantities[$index]
            ]);

            Product::where("id", $product_ids[$index])->update([
                'quantity' => DB::raw("quantity - {$quantities[$index]}")
            ]);

            if(Product::find($product_ids[$index])->quantity <= 20) {
                $lowProductCount++;
            }
        }

        if($lowProductCount > 0){
            if($lowProductCount === 1) $item = 'item';
            else $item = 'items';
            Notification::create([
                'title' => 'Low Stock Alert',
                'msg' => "The system has detected $lowProductCount new $item running out of stock. Restock soon to avoid running out.",
                'status' => 'unread'
            ]);

            NewNotification::dispatch([
                'status' => 'new_ntf'
            ]);
        }

        ProductChange::dispatch([
            'status' => 'new_record',
        ]);

        return response()->json([
            'msg' => 'Sale Completed',
            'status' => true
        ]);
    }
}
