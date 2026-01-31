<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function getSuppliers()
    {
        $suppliers = Supplier::all();
        return response()->json([
            'suppliers' => $suppliers,
            'num' => count($suppliers)
        ]);
    }

    public function deleteSupplier(Supplier $supplier)
    {
        $supplier->delete();
        $newSuppliers = Supplier::all();
        return response()->json([
            'msg' => 'Deleted Successfully',
            'status' => true,
            'newSuppliers' => $newSuppliers,
            'newNum' => count($newSuppliers)
        ]);
    }
}
