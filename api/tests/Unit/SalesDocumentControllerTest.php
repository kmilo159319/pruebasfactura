<?php

namespace Tests\Unit;

use App\Http\Controllers\SalesDocumentController;
use App\Models\Customer;
use App\Models\Product;
use App\Models\User;
use App\Models\SalesDocument;
use App\Models\SalesDocumentDetail;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;

class SalesDocumentControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function testIndex()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->get('/api/Documents',[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(200);
    }

    public function testShow()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $salesDocument = SalesDocument::factory()->create();

        $response = $this->get('/api/Documents/' . $salesDocument->id,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(200);
    }

    public function testStore()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $customer = Customer::factory()->create();
        $product = Product::factory()->create();

        $data = [
            'id_customer' => $customer->id,
            'user_id' => $user->id,
            'general_description' => 'documento para pruebas',
            'general_total' => 100.0,
            'items' => [
                [
                    'id_product' => $product->id,
                    'quantity' => 2,
                    'price_by_unit' => 50.0,
                    'total' => 100.0,
                ]
            ]
        ];

        $response = $this->post('/api/Documents', $data,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(201);

        $this->assertDatabaseHas('sales_documents', [
            'id_customer' => $customer->id,
            'general_description' => 'documento para pruebas',
            'general_total' => 100.0,
        ]);

        $this->assertDatabaseHas('sales_document_details', [
            'id_product' => $product->id,
            'quantity' => 2,
            'price_by_unit' => 50.0,
            'total' => 100.0,
        ]);
    }

    public function testUpdate()
    {


        $salesDocument = SalesDocument::factory()->create();
        $customer = Customer::factory()->create();

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $data = [
            'id_customer' => $customer->id,
            'user_id' => $user->id,
            'general_description' => 'documento actualizado con exito',
            'general_total' => 200.0,
        ];


        $response = $this->put('/api/Documents/' . $salesDocument->id, $data, [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('sales_documents', [
            'id' => $salesDocument->id,
            'id_customer' => $customer->id,
            'general_description' => 'documento actualizado con exito',
            'general_total' => 200.0,
        ]);
    }

    public function testDestroy()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $salesDocument = SalesDocument::factory()->create();

        $response = $this->delete('/api/Documents/' . $salesDocument->id, [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(204);

        $this->assertDeleted($salesDocument);
    }
}
