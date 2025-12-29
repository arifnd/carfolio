<?php

namespace Database\Seeders;

use App\Models\Fuel;
use Illuminate\Database\Seeder;

class FuelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Fuel::insertOrIgnore([
            ['id' => 1, 'name' => 'Bensin'],
            ['id' => 2, 'name' => 'Diesel'],
            ['id' => 3, 'name' => 'Hybrid'],
        ]);
    }
}
