<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Str;
// use App\Models\User;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Hash;


Route::get('/user', [UserController::class, 'getUser'])->middleware('auth:sanctum'); // done
Route::post('/user/add', [UserController::class, 'addUser'])->middleware('auth:sanctum'); // done
Route::get('/employees', [UserController::class, 'getUsers'])->middleware('auth:sanctum'); // done
Route::delete('/employees/{employee}', [UserController::class, 'deleteUser'])->middleware('auth:sanctum'); // done

Route::get('/admins', [AdminController::class, 'getAdmins'])->middleware('auth:sanctum');
Route::delete('/admins/{admin}', [AdminController::class, 'deleteAdmin'])->middleware('auth:sanctum');



Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']); // done
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/supplier/login', [AuthController::class, 'supplierLogin']);


Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum'); //done

Route::get('/products', [ProductController::class, 'getProducts'])->middleware('auth:sanctum'); //done
Route::delete('/products/{product}', [ProductController::class, 'deleteProduct'])->middleware('auth:sanctum'); //done
Route::post('/products/create', [ProductController::class, 'createProduct'])->middleware("auth:sanctum");
Route::post('/products/add', [ProductController::class, 'addProduct'])->middleware("auth:sanctum");
Route::post('/products/scan/qrcode/add', [ProductController::class, 'addProduct']);

Route::get('/products/low', [ProductController::class, 'getLowProducts'])->middleware("auth:sanctum");

Route::get('/sales', [SaleController::class, 'getSales'])->middleware('auth:sanctum'); // done
Route::post('/sales/add', [SaleController::class, 'addSale'])->middleware('auth:sanctum'); // done
Route::delete('/sales/{sale}', [SaleController::class, 'deleteSale'])->middleware('auth:sanctum'); // done

Route::get('/suppliers', [SupplierController::class, 'getSuppliers'])->middleware('auth:sanctum'); // done
Route::delete('/suppliers/{supplier}', [SupplierController::class, 'deleteSupplier'])->middleware('auth:sanctum'); // done

Route::get('/suppliers', [SupplierController::class, 'getSuppliers'])->middleware('auth:sanctum'); // done
Route::delete('/suppliers/{supplier}', [SupplierController::class, 'deleteSupplier'])->middleware('auth:sanctum'); // done

Route::get('/orders/{id}', [OrderController::class, 'getOrders'])->middleware('auth:sanctum'); // done
Route::post('/orders/place', [OrderController::class, 'placeOrder'])->middleware('auth:sanctum'); // done

Route::get('/notifications/get', [NotificationController::class, 'getNotifications'])->middleware(('auth:sanctum'));
Route::get('/notification/check', [NotificationController::class, 'checkNotification'])->middleware(('auth:sanctum'));
Route::get('/notification/markasread', [NotificationController::class, 'markAsRead'])->middleware(('auth:sanctum'));





// Route::post('/items', function(Request $request) {
//     if(Auth::guard('supplier')->attempt($request->only('username', 'password'))){
//         return Auth::guard('supplier')->user();
//     }

//     return response()->json([
//         'msg' => 'Invalid Credential'
//     ]);
// });

