<?php

namespace Database\Seeders;

use App\Models\SalesDocument;
use Illuminate\Database\Seeder;

class SalesDocumentSeeder extends Seeder
{
    public function run()
    {
        SalesDocument::factory()->count(13)->create();
    }
}
