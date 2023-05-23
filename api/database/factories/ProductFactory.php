<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->text(6),
            'price'=> $this->faker->numberBetween(1600,200000),
            'url' => $this->faker->text(23)
        ];
    }
}
