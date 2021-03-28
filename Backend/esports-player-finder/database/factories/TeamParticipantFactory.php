<?php

namespace Database\Factories;

use App\Models\TeamParticipant;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamParticipantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TeamParticipant::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'status' => 0
        ];
    }
}
