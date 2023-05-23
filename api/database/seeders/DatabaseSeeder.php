<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(class:CustomerSeeder::class);
        $this->call(class:ProductSeeder::class);
        $this->call(class:SalesDocumentSeeder::class);
        $this->call(class:SalesDocumentDetailSeeder::class);
    }
}
