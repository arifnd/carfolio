<?php

namespace Database\Seeders;

use App\Models\Transmission;
use Illuminate\Database\Seeder;

class TransmissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transmission::insertOrIgnore([
            ['id' => 1, 'name' => 'Automatic'],
            ['id' => 2, 'name' => 'CTV'],
            ['id' => 3, 'name' => 'Manual'],
        ]);
    }
}
