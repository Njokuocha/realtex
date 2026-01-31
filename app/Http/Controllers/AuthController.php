<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|min:3|max:255',
        //      'username' => 'required|string|unique:users,username',
        //     'email' => 'required|email',
        //     'password' => 'required|string|min:4|confirmed'
        // ]);
        $validated = [
            'name' => 'John Vault',
            'email' => 'johnvault@gmail.com',
            'password' => 'hola'
        ];

        User::create($validated);

        return response()->json([
            'msg' => 'New user created'
        ]);
    }

    // action - user(employee) login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials)){
            $token = $request->user()->createToken('auth_token')->plainTextToken;

            return response()->json([
                'msg' => 'Login Successful',
                'status' => 'success',
                'token' => $token
            ]);
        }

        return response()->json([
            'loginErr' => 'Invalid Credentials',
            'status' => "failure"
        ]);
    }

    // action - admin login
    public function adminLogin(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => 'required'
        ]);

        if(Auth::guard('admin')->attempt($credentials))
        {
            // Alternative
            // $token = Auth::guard('admin')->user()->createToken('auth_token')->plainTextToken;

            $token = $request->user('admin')->createToken('auth_token')->plainTextToken;

            return response()->json([
                'msg' => 'Login Successful',
                'status' => 'success',
                'token' => $token
            ]);
        }

        return response()->json([
            'loginErr' => 'Invalid Credentials',
            'status' => "failure"
        ]);
    }

    // action - supplier login
    public function supplierLogin(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => 'required'
        ]);

        if(Auth::guard('supplier')->attempt($credentials))
        {
            // Alternative
            // $token = Auth::guard('supplier')->user()->createToken('auth_token')->plainTextToken;

            $token = $request->user('supplier')->createToken('auth_token')->plainTextToken;

            return response()->json([
                'msg' => 'Login Successful',
                'status' => 'success',
                'token' => $token
            ]);
        }

        return response()->json([
            'loginErr' => 'Invalid Credentials',
            'status' => "failure"
        ]);
    }

    // action - logout
    public function logout(Request $request)
    {
        // $request->user()->currentAccessToken()->delete(); // for current token
        $request->user()->tokens()->delete(); // for all token across devices
        return response()->json([
            'status' => 'success',
            'msg' => 'Logout Successful'
        ]);
    }
}
