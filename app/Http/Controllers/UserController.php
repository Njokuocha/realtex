<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // action - get user
    public function getUser(Request $request)
    {
        return $request->user();
    }

    public function getUsers()
    {
        return response([
            'employees' => User::all(),
            'num' => count(User::all())
        ]);
    }

    public function addUser(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users,username|unique:suppliers,username|unique:admins,username',
            'email' => 'nullable|email',
            'role' => 'required|string',
            'password' => 'required|string|min:4',
            'note' => 'nullable',
            'location' => 'nullable'
        ]);

        // return $request->input();

        $role = $request->input('role');
        if($role == 'admin'){
            Admin::create($credentials);
        } elseif($role == 'supplier'){
            Supplier::create($credentials);
        } else{
            User::create($credentials);
        }

        return response()->json([
            'status' => 'success',
            'msg' => "New $role created successfully"
        ]);
    }

    public function deleteUser(User $employee)
    {
        $employee->delete();
        $newEmployees = User::all();
        return response()->json([
            'msg' => 'Deleted Successfully',
            'status' => true,
            'newEmployees' => $newEmployees,
            'newNum' => count($newEmployees)
        ]);
    }
}
