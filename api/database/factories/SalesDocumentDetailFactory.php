<?php

namespace Database\Factories;

use App\Models\SalesDocumentDetail;
use App\Models\Product;
use App\Models\SalesDocument;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalesDocumentDetailFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SalesDocumentDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $product = Product::inRandomOrder()->first();
        $document = SalesDocument::inRandomOrder()->first();

        return [
            'id_product' => $product->id,
            'id_document' => $document->id,
            'quantity' => $this->faker->randomNumber(2),
            'price_by_unit' => $this->faker->randomFloat(2, 10, 100),
            'total' => $this->faker->randomFloat(2, 100, 1000),
        ];
    }
}
