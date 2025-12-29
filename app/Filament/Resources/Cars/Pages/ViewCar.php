<?php

namespace App\Filament\Resources\Cars\Pages;

use App\Filament\Resources\Cars\CarResource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;
use Filament\Support\Icons\Heroicon;

class ViewCar extends ViewRecord
{
    protected static string $resource = CarResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('kembali')
                ->color('gray')
                ->icon(Heroicon::ChevronLeft)
                ->url(route('filament.admin.resources.cars.index')),
            EditAction::make()
                ->icon(Heroicon::PencilSquare),
        ];
    }
}
