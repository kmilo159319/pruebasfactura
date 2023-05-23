<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use File;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $json = File::get("database/data/productos.json");
        $productos = json_decode($json);

        foreach ($productos as $key => $value) {

            \App\Models\product::factory([
                'description' => $value->Producto,
                'price' => $value->Precio,
                'url' => $value->url,
            ])->create();

        }
    }
}
