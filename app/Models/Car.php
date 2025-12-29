<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Car extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array<string>|bool
     */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    /**
     * Get the brand that owns the car.
     */
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    /**
     * Get the type that owns the car.
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class);
    }

    /**
     * Get the fuel that owns the car.
     */
    public function fuel(): BelongsTo
    {
        return $this->belongsTo(Fuel::class);
    }

    /**
     * Get the fuel that owns the car.
     */
    public function transmission(): BelongsTo
    {
        return $this->belongsTo(Transmission::class);
    }
}
