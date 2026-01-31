<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = ['name', 'category', 'price', 'location', 'quantity', 'supplier_id', 'qrcode_token'];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}
