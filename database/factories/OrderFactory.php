<?php

namespace Database\Factories;

use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $desc_status = [true, false];

        $supplier = Supplier::inRandomOrder()->first();
        $product = Supplier::find($supplier->id)->products->first()->name;
        // $products = [
        //     'Samsung Galaxy S22', 'JBL Headset', 'Samsung Charger', 
        //     'iPhone 11', 'iPhone 11 Pro', 'Tecno Pop 5', 'Tecno Camon 16', 'MTN Mifi', 'iPhone XX Max',
        //     'Airtel Mifi', 'HP Mouse', 'HP Spectre Pro X360 G2', 'Itel P36', 'Oraimo 30mAh Power Bank',
        //     'Oraimo Headset', 'MacBook Air (M4)'
        // ];

        return [
            'supplier_name' => $supplier->name,
            'supplier_id' => $supplier->id,
            // 'product' => $products[array_rand($products)],
            'product' => $product,
            'quantity' => fake()->numberBetween(50, 70),
            'note' => ($desc_status[array_rand($desc_status)]) ? fake()->text(400) : null,
            'status' => ($desc_status[array_rand($desc_status)]) ? 'delivered' : 'pending',
        ];
    }
}
