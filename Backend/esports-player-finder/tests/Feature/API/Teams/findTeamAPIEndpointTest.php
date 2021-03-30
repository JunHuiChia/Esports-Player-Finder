<?php

namespace Tests\Feature\API\Team;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use App\Models\Game;
use App\Models\Team;
use App\Models\TeamParticipant;
use App\Models\User;
use App\Models\UserGameRole;
use App\Models\GameRole;


class findTeamAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

     /**
     * Test finding teams with valid parameters
     *
     * @return void
     */
    public function testFindTeamWithValidParameter()
    {

        $user = User::factory()
                    ->create();
        
        $game = Game::factory()
            ->has(GameRole::factory()
                    ->has(UserGameRole::factory(['user_id' => $user->id])), 'gameRoles')
            ->has(GameRole::factory()
                    ->has(UserGameRole::factory(['user_id' => 1])), 'gameRoles')
            ->create();



        $team = Team::factory(["game_id" => $game->id])
                    ->count(2)
                    ->has(TeamParticipant::factory(["user_id" => $user->id]), 'teamParticipants')
                    ->create();

        $params = [
            "game_id" => 1
        ];
        $response = $this->json('GET', '/api/teams/find', $params, ["Authorization" => $this->token]);
        $response->assertStatus(200)
                ->assertJson(
                    fn (AssertableJson $json) =>
                    $json->has('Teams', 
                            fn ($json) =>
                            $json->where('0.team_id', "1")
                                ->where('0.team_name', $team[0]->name)
                                ->etc())
                    );
                    
    }
}