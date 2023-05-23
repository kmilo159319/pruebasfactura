<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class failsController extends Controller
{
    public function fails(Request $request){
        //cuando el acceso es rechazado
            return response()->json([
                'message' => 'Invalid access credentials'
            ], 400);
    }
}
