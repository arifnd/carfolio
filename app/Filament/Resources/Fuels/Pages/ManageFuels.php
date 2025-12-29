<?php

namespace App\Filament\Resources\Fuels\Pages;

use App\Filament\Resources\Fuels\FuelResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;

class ManageFuels extends ManageRecords
{
    protected static string $resource = FuelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->modalWidth(Width::Medium)
                ->icon(Heroicon::PlusCircle),
        ];
    }
}
