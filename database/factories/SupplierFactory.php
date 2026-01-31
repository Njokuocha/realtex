<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $desc_status = [true, false];
        $company = ['Itel Mobiles', 'JBL Studios', 'iPhone', 'HP', 'Samsung', 'Tecno', 'Dell', 'Oraimo'];
        // $products = [
        //     'Samsung Galaxy S22', 'JBL Headset', 'Samsung Charger', 
        //     'iPhone 11', 'iPhone 11 Pro', 'Tecno Pop 5', 'Tecno Camon 16', 'MTN Mifi', 'iPhone XX Max',
        //     'Airtel Mifi', 'HP Mouse', 'HP Spectre Pro X360 G2', 'Itel P36', 'Oraimo 30mAh Power Bank',
        //     'Oraimo Headset', 'MacBook Air (M4)'
        // ];

        return [
            'name' => $company[array_rand($company)],
            'username' => fake()->userName(),
            'email' => fake()->email(),
            'location' => fake()->address(),
            // 'product' => $products[array_rand($products)],
            'note' => ($desc_status[array_rand($desc_status)]) ? fake()->text(400) : null,
            'password' => Hash::make('supplier')
        ];
    }
}
