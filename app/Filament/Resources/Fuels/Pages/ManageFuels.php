<?php

namespace App\Filament\Resources\Fuels\Pages;

use App\Filament\Resources\Fuels\FuelResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageFuels extends ManageRecords
{
    protected static string $resource = FuelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
