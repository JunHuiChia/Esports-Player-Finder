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
Route::post('/login', [App\Http\Controllers\UserController::class, 'login']);
Route::get('/logout', [App\Http\Controllers\UserController::class, 'logout']);

//Teams
Route::middleware('auth:sanctum')->get('/teams/find', [App\Http\Controllers\TeamController::class, 'find']);
Route::middleware('auth:sanctum')->post('/teams', [App\Http\Controllers\TeamController::class, 'create']);
Route::get('/teams', [App\Http\Controllers\TeamController::class, 'get']);

// Users
Route::post('/register', [App\Http\Controllers\UserController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user', [App\Http\Controllers\UserController::class, 'get']);
Route::middleware('auth:sanctum')->patch('/users', [App\Http\Controllers\UserController::class, 'update']);

// API token generation
Route::post('/sanctum/token', [App\Http\Controllers\UserController::class, 'createToken']);

// Games
Route::middleware('auth:sanctum')->get('/games', [App\Http\Controllers\GameController::class, 'all']);

// Game Roles
Route::middleware('auth:sanctum')->post('/user/gamerole', [App\Http\Controllers\UserGameRoleController::class, 'create']);
Route::middleware('auth:sanctum')->delete('/user/gamerole', [App\Http\Controllers\UserGameRoleController::class, 'delete']);
Route::middleware('json.response')->post('/sanctum/token', [App\Http\Controllers\UserController::class, 'createToken']);
