<?php

namespace App\Http\Controllers;

use App\Models\salesDocument;
use App\Models\salesDocumentDetail;
use App\Models\product;
use App\Models\customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SalesDocumentController extends Controller
{
    public function index()
    {
        $salesDocuments = SalesDocument::all();
        return response()->json($salesDocuments);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_customer' => 'required|integer',
            function ($attribute, $value, $fail) {
                if (!customer::find($value))  {
                    $fail("El cliente con ID $value no existe.");
                }
            }
            ,
            'user_id' => 'required|integer',
            'general_description' => 'required|string|max:255',
            'general_total' => 'required|numeric',
            'items' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }


        // Validar los campos de los items del documento de venta
        $itemValidator = Validator::make($request->input('items'), [
            '*.id_product' => ['required','integer',
                function ($attribute, $value, $fail) {
                    if (!Product::find($value))  {
                       $fail("El producto con ID $value no existe.");
                    }
                },
            ],
            '*.quantity' => 'required|integer',
            '*.price_by_unit' => 'required|numeric',
            '*.total' => 'required|numeric',
        ]);

        if ($itemValidator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones de los items',
                'errors' => $itemValidator->errors()
            ], 422);
        }

        $salesDocument = SalesDocument::create($validator->validated());

        // Crear los items del documento de venta
         $itemsData = $request->input('items');
         foreach ($itemsData as $itemData) {
            salesDocumentDetail::create([
                 'id_product' => $itemData['id_product'],
                 'id_document' => $salesDocument->id,
                 'quantity' => $itemData['quantity'],
                 'price_by_unit' => $itemData['price_by_unit'],
                 'total' => $itemData['total'],
             ]);
         }

        return response()->json($salesDocument, 201);
    }


    public function show($id)
    {
        $salesDocument = salesDocument::find($id);

        if (!$salesDocument) {
            return response()->json([
                'message' => 'Documento de venta no encontrado'
            ], 404);
        }

        $salesDocument->load('salesDocumentDetail', 'customer','salesDocumentDetail.products');

        return response()->json($salesDocument);
    }

    public function update(Request $request, $id = null)
    {
        if (!$id) {
            return response()->json([
                'message' => 'ID no proporcionado'
            ], 422);
        } else if (!$salesDocument = SalesDocument::find($id)) {
            return response()->json([
                'message' => 'Documento de venta no encontrado'
            ], 422);
        }

        $validator = Validator::make($request->all(), [
            'id_customer' => 'required|integer',
            'user_id' => 'required|integer',
            'general_description' => 'required|string|max:255',
            'general_total' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }

        $salesDocument->update($validator->validated());

        return response()->json($salesDocument);
    }

    public function destroy($id = null)
    {
        if (!$id) {
            return response()->json([
                'message' => 'ID no proporcionado'
            ], 422);
        } else if (!$salesDocument = SalesDocument::find($id)) {
            return response()->json([
                'message' => 'Documento de venta no encontrado'
            ], 422);
        }

        // Eliminar los SalesDocumentDetail asociados al SalesDocument
        $salesDocument->salesDocumentDetail()->delete();

        // Eliminar el SalesDocument
        $salesDocument->delete();

        return response()->json(null, 204);
    }
}
