<?php

namespace Tests\Feature\API\Team;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use App\Models\Game;
use App\Models\Team;

class GetTeamAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

     /**
     * Test getting team with valid parameters
     *
     * @return void
     */
    public function testGetTeamWithValidParameter()
    {


        $game = Game::factory()
                    ->count(1)
                    ->create();

        $team =Team::factory()
                    ->count(1)
                    ->create();

        $params = [
            "id" => 1
        ];
        $response = $this->json('GET', '/api/teams', $params);
        $response->assertStatus(200)
                 ->assertJson(
                fn (AssertableJson $json) =>
                $json->has('Team', 
                        fn ($json) =>
                        $json->where('id', 1)
                             ->where('name', $team[0]->name)
                             ->etc())

                    ->has('Team.game', 
                        fn ($json) =>
                        $json->where('id', 1)
                             ->where('name', $game[0]->name)
                             ->etc())
                 );
    }

     /**
     * Test getting team with invalid parameters
     *
     * @return void
     */
    public function testGetTeamWithInvalidParameter()
    {
        
        $params = [
            "id" => 1
        ];
        $response = $this->json('GET', '/api/teams', $params);
        $response ->assertStatus(400);
    }

     /**
     * Test getting team with missing parameters
     *
     * @return void
     */
    public function testGetTeamWithMissingParameter()
    {
        
        $response = $this->json('GET', '/api/teams');
        $response ->assertStatus(400);
    }
}
