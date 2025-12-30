<?php

namespace App\Filament\Resources\Cars\RelationManagers;

use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Tables\Table;

class PicturesRelationManager extends RelationManager
{
    protected static string $relationship = 'pictures';

    protected static ?string $modelLabel = 'gambar';

    protected static ?string $title = 'Gambar';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->visibility('public')
                    ->label('Gambar')
                    ->disk('public')
                    ->required()
                    ->image(),
            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading('Gambar')
            ->headerActions([
                CreateAction::make()
                    ->modalWidth(Width::Medium),
            ])
            ->columns([
                Stack::make([
                    ImageColumn::make('image')
                        ->disk('public')
                        ->label('Gambar')
                        ->imageSize(250),
                ]),
            ])->contentGrid([
                'md' => 4,
            ])->recordActions([
                DeleteAction::make(),
            ]);
    }

    public function isReadOnly(): bool
    {
        return false;
    }
}
