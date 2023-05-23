<?php

namespace Database\Seeders;

use App\Models\SalesDocumentDetail;
use Illuminate\Database\Seeder;

class SalesDocumentDetailSeeder extends Seeder
{
    public function run()
    {
        SalesDocumentDetail::factory()->count(40)->create();
    }
}
