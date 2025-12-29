<?php

namespace App\Filament\Resources\Cars\Schemas;

use App\Models\Brand;
use App\Models\Fuel;
use App\Models\Transmission;
use App\Models\Type;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama')
                            ->required(),
                        TextInput::make('year')
                            ->label('Tahun')
                            ->required()
                            ->numeric(),
                        Select::make('brand_id')
                            ->options(Brand::pluck('name', 'id'))
                            ->label('Brand')
                            ->native(false)
                            ->required(),
                        Select::make('type_id')
                            ->options(Type::pluck('name', 'id'))
                            ->label('Tipe')
                            ->native(false)
                            ->required(),
                        Select::make('fuel_id')
                            ->options(Fuel::pluck('name', 'id'))
                            ->label('Bahan Bakar')
                            ->native(false)
                            ->required(),
                        Select::make('transmission_id')
                            ->options(Transmission::pluck('name', 'id'))
                            ->label('Transmisi')
                            ->native(false)
                            ->required(),
                        TextInput::make('price')
                            ->label('Harga')
                            ->required()
                            ->numeric(),
                        Toggle::make('available')
                            ->default(true)
                            ->label('Tersedia')
                            ->inline(false)
                            ->required(),
                    ])->columns(2),
            ])->columns(1);
    }
}
