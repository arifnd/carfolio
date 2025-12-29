<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::insertOrIgnore([
            ['id' => 1, 'name' => 'Honda'],
            ['id' => 2, 'name' => 'Toyota'],
            ['id' => 3, 'name' => 'Daihatsu'],
        ]);
    }
}
