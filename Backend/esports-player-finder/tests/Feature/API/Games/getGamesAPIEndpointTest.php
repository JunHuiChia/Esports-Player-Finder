<?php

namespace Tests\Feature\API\Games;

use App\Models\Game;
use App\Models\GameRole;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class getGamesAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the authentication works
     *
     * @return void
     */
    public function testGetAllGamesAuthenticated()
    {

        Game::factory()->count(5)->create();
        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful();
    }
        
    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testGetAllGamesUnathenticated()
    {
        $response = $this->json('GET', '/api/games');

        $response->assertUnauthorized();
    }
    
    /**
     * Test that multiple games can be created and retrieved
     *
     * @return void
     */
    public function testGetMultipleGames()
    {
        $games = Game::factory()->count(3)->create();
        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful()
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->has('games', 3)
                ->has(
                    'games.0',
                    fn ($json) =>
                    $json->where('id', 1)
                    ->where('name', $games[0]->name)
                        ->etc()
                )
            );
    }


    /**
     * Test that a single game can be created and retrieved
     *
     * @return void
     */
    public function testGetSingleGame()
    {
        $game = Game::factory()->create();
        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful()
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->has('games', 1)
                ->has(
                    'games.0',
                    fn ($json) =>
                    $json->where('id', 1)
                    ->where('name', $game->name)
                        ->etc()
                )
            );
    }

    /**
     * Test that an empty array is returned if no games exist
     *
     * @return void
     */
    public function testGetZeroGames()
    {
        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful()
                        ->assertJson( fn (AssertableJson $json) => $json->has('games', 0));
    }

    /**
     * Test getting a single game with a single game role
     *
     * @return void
     */
    public function testGetSingleGameWithSingleGameRole()
    {
        $games = Game::factory()
                        ->count(1)
                        ->has(GameRole::factory()->count(1), 'gameRoles')
                        ->create();

        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful()
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->has('games', 1)
                ->has(
                    'games.0',
                    fn ($json) =>
                        $json->where('id', 1)
                            ->where('name', $games->first()->name)
                            ->has('game_roles',1)
                            ->has(
                                'game_roles.0', 
                                fn ($json) => 
                                    $json->where('game_id', '1')
                                    ->where('name', $games->first()->gameRoles[0]->name)
                                    ->etc()
                            )
                            ->etc()
                    )
            );
    }

    /**
     * Test getting multiple games with multiple game roles each
     *
     * @return void
     */
    public function testGetMultipleGamesWithMultipleGameRoles()
    {
        $games = Game::factory()
                        ->count(3)
                        ->has(GameRole::factory()->count(3), 'gameRoles')
                        ->create();

        $response = $this->getJson('/api/games', ["Authorization" => $this->token]);
        $response->assertSuccessful()
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->has('games', 3)
                ->has(
                    'games.0',
                    fn ($json) =>
                        $json->where('id', 1)
                            ->where('name', $games->first()->name)
                            ->has('game_roles',3)
                            ->has(
                                'game_roles.0', 
                                fn ($json) => 
                                    $json->where('game_id', '1')
                                    ->where('name', $games->first()->gameRoles[0]->name)
                                    ->etc()
                            )
                            ->etc()
                    )
            );
    }
}
