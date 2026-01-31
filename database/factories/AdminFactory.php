<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // return [
        //     'name' => 'Shadow Sec',
        //     'username' => 'shadow_sec',
        //     'email' => 'shadowsec@gmail.com',
        //     'password' => Hash::make('shadow'),
        //     "status" => "chief"
        // ];
        return [
            'name' => 'Realtex Inc.',
            'username' => 'realtex',
            'email' => 'realtex101@hotmail.co.uk',
            'password' => Hash::make('realtex99'),
            "status" => "chief"
        ];
        // return [
        //     'name' => fake()->name(),
        //     'username' => fake()->userName(),
        //     'email' => fake()->unique()->email(),
        //     'password' => Hash::make('admin'),
        // ];
    }
}
