<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\PersonalAccessToken;

class PersonalAccessTokenFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PersonalAccessToken::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'tokenable_type' => 'App\Models\User',
            'tokenable_id' => '1',
            'name' => 'Test Phone',
            'token' => 'deb960fdb4bfe067d02433fc30fd37ea8076bbb70e0a353b4475eee895492337',
            'abilities' => '["*"]',
        ];
    }
}
