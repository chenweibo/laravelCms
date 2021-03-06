<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

use Illuminate\Support\Str;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        // 'email' => $faker->unique()->safeEmail,
        'email'             => 'dycm@dycm.com',
        'email_verified_at' => now(),
        'password'          => Hash::make('dycm123456'), // dycm123456
        'remember_token'    => Str::random(10),
        'is_admin'          => 1,
    ];
});
