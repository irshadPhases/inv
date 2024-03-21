<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\services\StockServices;
use App\services\SalesMan;
use Illuminate\Http\Request;
use Log;

class ApiController extends Controller
{

    public function addStock(Request $req)
    {
        try {
            $services = new StockServices();
            $services->insert($req->all());
            return response()->json(['status' => true, 'message' => 'Stock added successfully'], 200);
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['status' => false, 'message' => 'Failed to add stock'], 500);
        }

    }
    public function getStocks()
    {

        try {
            $services = new StockServices();
            $stocks = $services->get();
            return response()->json(['status' => true, 'data' => $stocks], 200);
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['status' => false, 'message' => 'Failed to fetch stock'], 500);
        }
    }

    public function addSalesMan(Request $req)
    {
        try {
            $SalesMan = new SalesMan();
            $SalesMan->insert($req->all());
            return response()->json(['status' => true, 'message' => 'Salesman added successfully'], 200);
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['status' => false, 'message' => 'Failed to add Salesman'], 500);
        }

    }
}
