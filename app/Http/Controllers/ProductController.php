<?php

namespace App\Http\Controllers;

use App\Events\ProductChange;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    // action - fetch products
    public function getProducts()
    {
        $products = Product::with('supplier')->get();
        return response()->json([
            'products' => $products,
            'num' => count($products)
        ]);
    }

    public function deleteProduct(Product $product)
    {
        $product->delete();
        $newProducts = Product::all();
        return response()->json([
            'msg' => 'Deleted Successfully',
            'status' => true,
            'newProducts' => $newProducts,
            'newNum' => count($newProducts)
        ]);
    }

    public function createProduct(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'category' => 'required|string',
            'price' => 'required|numeric',
            'location' => 'nullable|string',
            'quantity' => 'nullable|integer',
            'supplier_id' => 'required',
        ]);

        $supplier = Supplier::find($request->input('supplier_id'));
        $details = [
            ...$validated,
            'supplier' => $supplier->name
        ];

        Product::create($details);

        return response()->json([
            'status' => true
        ]);
    }

    public function addProduct(Request $request)
    {
        $details = $request->validate([
            'product' => 'required|integer|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        // return $request->input();

        $quantity = (int) $request->input('quantity');

        // if($request->input('qrcode_token'))
        // {
        //     $getProduct = Product::where("qrcode_token", $request->input('qrcode_token'))
        //         ->where("id", $request->input('product'))
        //         ->get();
        //     // if(empty($getProduct)) return "empty";
        //     // else return "not empty" . count($getProduct);

        //     if(count($getProduct) != 0) {
        //         // return $getProduct;
        //         abort(422, "Unproccessable Entity, Can't scan product twice");
        //     }

        //     Product::where("id", $request->input('product'))
        //     ->update([
        //         'quantity' => DB::raw("quantity + $quantity"),
        //         'qrcode_token' => $request->input('qrcode_token')
        //     ]);

        //     return response()->json([
        //         'msg' => 'Product Updated',
        //         'status' => 'success'
        //     ]);
            
        // }

        Product::where("id", $request->input('product'))
            ->update([
                'quantity' => DB::raw("quantity + $quantity")
            ]);
        
        ProductChange::dispatch([
            'status' => 'new_record',
        ]);


        return response()->json([
            'msg' => 'Product Updated',
            'status' => 'success'
        ]);
    }

    public function getLowProducts()
    {
        $products = Product::where("quantity", "<=", 20)->get();
        return response()->json([
            'products' => $products,
            'num' => count($products)
        ]);
    }
}
