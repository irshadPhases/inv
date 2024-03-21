<?php
namespace App\services;

use App\Models\Stock;
use Log;

class StockServices
{
    function insertStock($data)
    {
        try {
            Stock::create($data);
        } catch (\Throwable $th) {
            Log::error($th);
        }
    }

    function getStocks()
    {
        try {
            return Stock::where('status', 1)->get()->toArray();
        } catch (\Throwable $th) {
            Log::error($th);
        }

    }
}
