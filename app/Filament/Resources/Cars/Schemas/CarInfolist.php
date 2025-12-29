<?php

namespace App\Filament\Resources\Cars\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CarInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        TextEntry::make('name')
                            ->label('Nama'),
                        TextEntry::make('year')
                            ->label('Tahun'),
                        TextEntry::make('brand.name')
                            ->label('brand'),
                        TextEntry::make('type.name')
                            ->label('Tipe'),
                        TextEntry::make('fuel.name')
                            ->label('Bahan Bakar'),
                        TextEntry::make('transmission.name')
                            ->label('Transmisi'),
                        TextEntry::make('price')
                            ->label('Harga')
                            ->money('IDR'),
                        IconEntry::make('available')
                            ->label('Tersedia')
                            ->boolean(),
                    ])->columns(2),
            ])->columns(1);
    }
}
