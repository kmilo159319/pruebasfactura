<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalesDocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_customer' => Customer::factory(),
            'user_id' => User::factory(),
            'general_description' => $this->faker->sentence,
            'general_total' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}
