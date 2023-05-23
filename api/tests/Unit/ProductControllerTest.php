<?php

namespace Tests\Unit;

use App\Http\Controllers\ProductController;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Laravel\Sanctum\Sanctum;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;

class ProductControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function testIndex()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);


        $response = $this->get('/api/products', [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        $response->assertStatus(200);
    }

    public function testShow()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $product = Product::factory()->create();

        $response = $this->get('/api/products/' . $product->id,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $data = [
            'description' => 'Example Product',
            'price' => 100,
            'url' => 'https://example.com/product',
        ];

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->post('/api/products', $data,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(201);

        $this->assertDatabaseHas('products', $data);
    }

    public function testUpdate()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $product = Product::factory()->create();

        $data = [
            'description' => 'Updated Product',
            'price' => 200,
            'url' => 'https://example.com/updated-product',
        ];

        $response = $this->put('/api/products/' . $product->id, $data, [
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(200);

        $this->assertDatabaseHas('products', $data);
    }

    public function testDestroy()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $product = Product::factory()->create();

        $response = $this->delete('/api/products/' . $product->id,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);

        $response->assertStatus(204);

        $this->assertDeleted($product);
    }

    public function testStoreValidationErrors()
    {
        $data = [
            'description' => '', // Campo requerido, se deja vacío para generar error de validación
            'price' => 100,
            'url' => 'https://example.com/product',
        ];

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->post('/api/products', $data,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['description']);
    }

    public function testUpdateValidationErrors()
    {
        $product = Product::factory()->create();

        $data = [
            'description' => '', // Campo requerido, se deja vacío para generar error de validación
            'price' => 200,
            'url' => 'https://example.com/updated-product',
        ];

        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->put('/api/products/' . $product->id, $data,[
            'Authorization' => 'Bearer ' . $user->createToken('test-token')->plainTextToken,
        ]);
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['description']);
    }
}
