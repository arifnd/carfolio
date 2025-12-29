<?php

namespace App\Filament\Resources\Cars\Pages;

use App\Filament\Resources\Cars\CarResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Support\Icons\Heroicon;
use Illuminate\Database\Eloquent\Builder;

class ListCars extends ListRecords
{
    protected static string $resource = CarResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->icon(Heroicon::PlusCircle),
        ];
    }

    public function getTabs(): array
    {
        return [
            'tersedia' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->whereAvailable(true)),
            'terjual' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->whereAvailable(false)),
        ];
    }
}
