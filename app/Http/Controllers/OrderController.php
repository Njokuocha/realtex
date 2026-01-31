<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function getOrders($id)
    {
        // Alternatively
        // $orders = Order::where("supplier_id", $request->route('id'));
        $orders = Order::where("supplier_id", $id)->orderBy('updated_at', 'desc')->get();
        return response()->json([
            'orders' => $orders
        ]);
    }

    public function placeOrder(Request $request)
    {
        $validated = $request->validate([
            'product' => 'required|string',
            'quantity' => 'required|integer|min:1'
        ]);

        $order_details = [
            ...$validated,
            'supplier_id' => $request->input('supplier_id'),
            'supplier_name' => $request->input('supplier_name'),
            'note' => $request->input('note')
        ];

        Order::create($order_details);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
