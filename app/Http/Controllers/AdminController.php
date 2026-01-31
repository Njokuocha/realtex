<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getAdmins()
    {
        return response([
            'admins' => Admin::all(),
            'num' => count(Admin::all())
        ]);
    }

    public function deleteAdmin(Admin $admin)
    {
        $admin->delete();
        $newAdmins = Admin::all();
        return response()->json([
            'msg' => 'Deleted Successfully',
            'status' => true,
            'newAdmins' => $newAdmins,
            'newNum' => count($newAdmins)
        ]);
    }
}
