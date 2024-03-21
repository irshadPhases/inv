<?php
namespace App\services;

use App\Models\User;

class SalesMan
{
    function insert($data)
    {
        $data['password'] = md5($data['email']);
        User::create($data);

    }

    function get()
    {
        return User::get()->toArray();
    }
}
