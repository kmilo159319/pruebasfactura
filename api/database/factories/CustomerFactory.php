<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    public function definition()
    {
        return [
            'type_identification' => $this->faker->randomElement(['ID', 'Passport']),
            'number_identification' => $this->faker->unique()->randomNumber(8),
            'name' => $this->faker->name,
        ];
    }
}
