<?php

use App\Http\Controllers\Api\ApiController;
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

Route::post('/add-stock', [ApiController::class, 'addStock']);
Route::get('/get-stocks', [ApiController::class, 'getStocks']);
Route::post('/add-salesman', [ApiController::class, 'addSalesMan']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
