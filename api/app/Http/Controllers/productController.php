<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string|max:255',
            'price' => 'required|integer|max:1000000',
            'url' => 'string|max:1255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }

        $product = Product::create($validator->validated());

        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Producto no encontrado'
            ], 404);
        }

        return response()->json($product);
    }

    public function update(Request $request, $id = null)
    {

        if (!$id) {
            return response()->json([
                'message' => 'ID no proporcionado'
            ], 422);
        }else if(!$product = Product::find($id)){
            return response()->json([
                'message' => 'producto no encontrado'
            ], 422);
        }

        $validator = Validator::make($request->all(), [
            'description' => 'required|string|max:255',
            'price' => 'required|integer|max:1000000',
            'url' => 'required|string|max:1255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }

        $product = Product::findOrFail($id);


        $product->update($validator->validated());

        return response()->json($product);
    }

    public function destroy($id = null)
    {
        if (!$id) {
            return response()->json([
                'message' => 'ID no proporcionado'
            ], 422);
        }else if(!$product = Product::find($id)){
            return response()->json([
                'message' => 'producto no encontrado'
            ], 422);
        }

        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);
    }
}
