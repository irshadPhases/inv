<?php
namespace App\services;

use App\Models\Stock;

class StockServices
{
    function insert($data)
    {
        Stock::create($data);
    }

    function get()
    {
        return Stock::get()->toArray();
    }
}
