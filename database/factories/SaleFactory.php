<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sale>
 */
class SaleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        $products = [
            'Samsung Galaxy S22', 'JBL Headset', 'Samsung Charger', 
            'iPhone 11', 'iPhone 11 Pro', 'Tecno Pop 5', 'Tecno Camon 16', 'MTN Mifi', 'iPhone XX Max',
            'Airtel Mifi', 'HP Mouse', 'HP Spectre Pro X360 G2', 'Itel P36', 'Oraimo 30mAh Power Bank',
            'Oraimo Headset', 'MacBook Air (M4)'
        ];
        $quantity = fake()->numberBetween(1, 40);
        return [
            'customer' => fake()->name(),
            'product' => $products[array_rand($products)],
            'quantity' => $quantity,
            // 'price' => fake()->randomFloat(2, 1500, 12500),
            'amount' => 1500 * $quantity,
            'sale_batch_id' => Str::uuid(),
            'user_id' => User::inRandomOrder()->first()->id
        ];
    }
}
