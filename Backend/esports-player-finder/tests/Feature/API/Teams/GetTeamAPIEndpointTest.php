<?php

namespace Tests\Feature\API\Team;

use Illuminate\Foundation\Testing\RefreshDatabase;
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
        

        Game::factory()
            ->count(1)
            ->create();

        Team::factory()
            ->count(1)
            ->create();

        $params = [
            "id" => 1
        ];
        $response = $this->json('GET', '/api/teams', $params);
        $response ->assertStatus(200);
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
