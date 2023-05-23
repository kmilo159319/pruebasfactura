<?php

namespace Tests\Unit;

use App\Http\Controllers\CustomerController;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class CustomerControllerTest extends TestCase
{
    use DatabaseTransactions; // Utilizar transacciones de base de datos para las pruebas

    public function testIndex()
    {
        // Creo el usuario
        $user = User::factory()->create();

        // le digo a sanctum que voy a ser ese usuario
        Sanctum::actingAs($user);

        // envio la solicitut con el token de autorizacion el cual aprovecho para crearlo
        $response = $this->get('/api/Customers', [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        // Retorno la respuesta
        $response->assertStatus(200);
    }

    public function testShow()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $customer = Customer::factory()->create();

        $response = $this->get('/api/Customers/'. $customer->id, [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(200);
    }

    public function testStore()
    {
        $data = [
            'type_identification' => 'example',
            'number_identification' => 12345,
            'name' => 'John Doe',
        ];

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $customer = Customer::factory()->create();

        $response = $this->post('/api/Customers', $data, [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(201);

        $this->assertDatabaseHas('customers', $data);
    }

    public function testUpdate()
    {
        $customer = Customer::factory()->create();

        $data = [
            'type_identification' => 'example',
            'number_identification' => 67890,
            'name' => 'Jane Smith',
        ];

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->put('/api/Customers/' . $customer->id, $data,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(200);

        $this->assertDatabaseHas('customers', $data);
    }

    public function testDestroy()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $customer = Customer::factory()->create();

        $response = $this->delete('/api/Customers/' . $customer->id,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        $response->assertStatus(200);

        $this->assertDeleted($customer);
    }

    public function testStoreValidationErrors()
{
    $data = [
        'type_identification' => '', // Campo requerido, se deja vacío para generar error de validación
        'number_identification' => 12345,
        'name' => 'John Doe',
    ];

    $user = User::factory()->create();
    Sanctum::actingAs($user);

    $response = $this->post('/api/Customers', $data, [
        'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['type_identification']);
}

public function testUpdateValidationErrors()
{
    $customer = Customer::factory()->create();

    $data = [
        'type_identification' => '', // Campo requerido, se deja vacío para generar error de validación
        'number_identification' => 67890,
        'name' => 'Jane Smith',
    ];

    $user = User::factory()->create();
    Sanctum::actingAs($user);

    $response = $this->put('/api/Customers/' . $customer->id, $data, [
        'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['type_identification']);
}


}
