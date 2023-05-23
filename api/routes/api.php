<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\failsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SalesDocumentController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/datauser', [AuthController::class, 'dataUser'])->middleware('auth:sanctum');

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');



Route::middleware('auth:sanctum')->prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/{id}', [ProductController::class, 'show']);
    Route::put('/{id?}', [ProductController::class, 'update']);
    Route::delete('/{id}', [ProductController::class, 'destroy']);
    Route::post('/', [ProductController::class, 'store']);

    // Ruta fallback para cualquier otra solicitud POST
    Route::post('/{any}', function () {
            return response()->json(['message' => 'Ruta no encontrada'], 404);
    })->where('any', '.*');
});


/*
Basado segun normas internacionales de restfull:

1) Obtener todos los productos:
GET /productos

2) Obtener un producto específico por su ID:
GET /productos/{id}

3) Crear un nuevo producto:
POST /productos

4) Actualizar un producto existente por su ID:
PUT /productos/{id}

5) Eliminar un producto por su ID:
DELETE /productos/{id}
*/

Route::middleware('auth:sanctum')->prefix('Customers')->group(function () {
    Route::get('/', [CustomerController::class, 'index']);
    Route::get('/{id}', [CustomerController::class, 'show']);
    Route::put('/{id}', [CustomerController::class, 'update']);
    Route::delete('/{id}', [CustomerController::class, 'destroy']);
    Route::post('/', [CustomerController::class, 'store']);

    // Ruta fallback para cualquier otra solicitud POST
    Route::post('/{any}', function () {
            return response()->json(['message' => 'Ruta no encontrada'], 404);
    })->where('any', '.*');
});


Route::middleware('auth:sanctum')->prefix('Documents')->group(function () {
    Route::get('/', [SalesDocumentController::class, 'index']);
    Route::get('/{id}', [SalesDocumentController::class, 'show']);
    Route::put('/{id}', [SalesDocumentController::class, 'update']);
    Route::delete('/{id}', [SalesDocumentController::class, 'destroy']);
    Route::post('/', [SalesDocumentController::class, 'store']);

    // Ruta fallback para cualquier otra solicitud POST
    Route::post('/{any}', function () {
            return response()->json(['message' => 'Ruta no encontrada'], 404);
    })->where('any', '.*');
});


// Ruta fallback para cualquier otra solicitud GET, POST, PUT, DELETE
Route::fallback(function () {
    return response()->json(['message' => 'Ruta no encontrada'], 404);
});


Route::get('/', [failsController::class, 'fails'])->name('fails');
