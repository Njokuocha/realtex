<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model; // just model, no authentication power
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Supplier extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\SupplierFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = ['name', 'username', 'password', 'email', 'location', 'note', 'role'];

    public function products(){
        return $this->hasMany(Product::class);
    }

    protected $hidden = [
        'password',
        // 'remember_token',
    ];

     protected function casts(): array
    {
        return [
            // 'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
