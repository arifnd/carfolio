<?php

namespace App\Filament\Resources\Cars\RelationManagers;

use Filament\Actions\CreateAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class FeaturesRelationManager extends RelationManager
{
    protected static string $relationship = 'features';

    protected static ?string $modelLabel = 'fitur';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama')
                    ->required(),
            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading('Fitur')
            ->headerActions([
                CreateAction::make()
                    ->modalWidth(Width::Medium),
            ])
            ->columns([
                TextColumn::make('name')
                    ->label('Nama'),
            ]);
    }

    public function isReadOnly(): bool
    {
        return false;
    }
}
