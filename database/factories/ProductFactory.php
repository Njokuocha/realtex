<?php

namespace Database\Factories;

use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;
use Ramsey\Uuid\Type\Integer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = ['Wifi', 'Phone', 'Laptop', 'Powerbank', 'Headset', 'Charger', 'Mouse', 'Keyboard'];
        $location = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'];
        $prices = [1500, 1000, 2250, 3500, 2150];
        $products = [
            'Samsung Galaxy S22', 'JBL Headset', 'Samsung Charger', 
            'iPhone 11', 'iPhone 11 Pro', 'Tecno Pop 5', 'Tecno Camon 16', 'MTN Mifi', 'iPhone XX Max',
            'Airtel Mifi', 'HP Mouse', 'HP Spectre Pro X360 G2', 'Itel P36', 'Oraimo 30mAh Power Bank',
            'Oraimo Headset', 'MacBook Air (M4)'
        ];

        return [
            'name' => $products[array_rand($products)],
            'category' => $category[array_rand($category)],
            // 'price' => fake()->randomFloat(2, 900, 1500),
            'price' => $prices[array_rand($prices)],
            'location' => $location[array_rand($location)],
            'quantity' => fake()->numberBetween(0, 75),
            'supplier_id' => Supplier::inRandomOrder()->first()->id
        ];
    }
}
