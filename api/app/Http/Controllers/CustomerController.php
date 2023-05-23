<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers, 200);
    }

    public function show($id)
    {
        $customer = Customer::findOrFail($id);
        return response()->json($customer, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type_identification' => 'required|string|max:255',
            'number_identification' => ['required','integer',
                function ($attribute, $value, $fail) {
                    $existingCustomer = Customer::where('number_identification', $value)->first();
                    if ($existingCustomer) {
                        $fail('El número de identificación ya está en uso');
                    }
                },
            ],
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }

        $customer = Customer::create($validator->validated());

        return response()->json($customer, 201);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'type_identification' => 'required|string|max:255',
            'number_identification' => ['integer',
                function ($attribute, $value, $fail) {
                    $existingCustomer = Customer::where('number_identification', $value)->first();
                    if ($existingCustomer) {
                        $fail('El número de identificación ya está en uso');
                    }
                },
            ],
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'El objeto no superó las validaciones',
                'errors' => $validator->errors()
            ], 422);
        }

        $customer->update($validator->validated());

        return response()->json($customer, 200);
    }

    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();

        return response()->json(['message' => 'Cliente eliminado'], 200);
    }
}
