<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Type::insertOrIgnore([
            ['id' => 1, 'name' => 'City Car'],
            ['id' => 2, 'name' => 'Crossover'],
            ['id' => 3, 'name' => 'Hatchback'],
            ['id' => 4, 'name' => 'Pickup'],
            ['id' => 5, 'name' => 'SUV'],
            ['id' => 6, 'name' => 'Sedan'],
        ]);
    }
}
