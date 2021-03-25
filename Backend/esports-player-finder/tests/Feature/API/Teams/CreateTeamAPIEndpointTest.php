<?php

namespace Tests\Feature\API\Team;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use App\Models\Game;
use App\Models\Team;

class CreateTeamAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testCreateTeamUnathenticated()
    {
        $response = $this->json('POST', '/api/teams');

        $response->assertUnauthorized();
    }


    

     /**
     * Test creating team that does not have a unique name
     *
     * @return void
     */
    public function testCreateTeamNotUnique()
    {
        Game::factory()
            ->count(1)
            ->create();

        Team::factory(["name" => "testname"])
            ->count(1)
            ->create();

        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }


     /**
     * Test creating team
     *
     * @return void
     */
    public function testCreateTeamWithValidParameter()
    {
        

        Game::factory()
            ->count(1)
            ->create();

        
        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response
            ->assertStatus(201)
            ->assertExactJson([
                 'created' => true,
            ]);
        $this->assertDatabaseHas(
            'teams', [
                'name' => 'testname',
                'description' => 'testdesc',
                'game_id' => '1',
                'discord_channel_id' => 'testdis',
            ]);
    }



    /**
     * Test creating team with missing name parameters
     *
     * @return void
     */
    public function testCreateTeamWithMissingName()
    {
        Game::factory()
            ->count(1)
            ->create();

        $params = [
            "description" => "testdesc",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test creating team with missing description parameters
     *
     * @return void
     */
    public function testCreateTeamWithMissingDescription()
    {
        Game::factory()
            ->count(1)
            ->create();
 
        $params = [
            "name" => "testname",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test creating team with missing discord channel id parameters
     *
     * @return void
     */
    public function testCreateTeamWithMissingDiscordChannelId()
    {
        Game::factory()
            ->count(1)
            ->create();

        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "game_id" => 1,
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test creating team with missing game id parameters
     *
     * @return void
     */
    public function testCreateTeamWithMissingGameId()
    {
        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test creating team with invalid game id parameters
     *
     * @return void
     */
    public function testCreateTeamWithInvalidGameId()
    {
        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }
    
    /**
     * Test creating team with no parameters
     *
     * @return void
     */
    public function testCreateTeamWithNoParameters()
    {
        $response = $this->json('POST', '/api/teams', [], ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }


         /**
     * Test creating team with an invalid token
     *
     * @return void
     */
    public function testCreateTeamWithInvalidToken()
    {
        

        Game::factory()
            ->count(1)
            ->create();

        
        $params = [
            "name" => "testname",
            "description" => "testdesc",
            "game_id" => 1,
            "discord_channel_id" => "testdis",
        ];
        $response = $this->json('POST', '/api/teams', $params , ["Authorization" => "invalid | faketoken"]);
        $response->assertStatus(401);
    }
}