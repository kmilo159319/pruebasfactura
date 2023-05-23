<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{

    public function run()
    {
        // Generar 15 clientes
        Customer::factory()->count(15)->create();
    }
}
