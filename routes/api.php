<?php

use App\Http\Controllers\ApiAuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;


    Route::resource('/customers', CustomerController::class);
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/user', function () {
        return Auth::user();
    });
});

Route::post("/login", [ApiAuthController::class, 'login']);
Route::post("/registration", [ApiAuthController::class, 'registration']);
