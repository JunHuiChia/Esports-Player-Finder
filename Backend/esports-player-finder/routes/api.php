<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Authentication
Route::middleware('auth:sanctum')->get('/user', [App\Http\Controllers\UserController::class, 'get']);
Route::post('/login', [App\Http\Controllers\UserController::class, 'login']);
Route::post('/register', [App\Http\Controllers\UserController::class, 'register']);
Route::get('/logout', [App\Http\Controllers\UserController::class, 'logout']);

// API token generation
Route::post('/sanctum/token', [App\Http\Controllers\UserController::class, 'createToken']);

// Games
Route::middleware('auth:sanctum')->get('/games', [App\Http\Controllers\GameController::class, 'all']);
Route::middleware('json.response')->post('/sanctum/token', [App\Http\Controllers\UserController::class, 'createToken']);
