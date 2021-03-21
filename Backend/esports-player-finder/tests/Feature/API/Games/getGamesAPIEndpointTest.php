<?php

namespace Tests\Feature\API\Games;

use App\Models\Game;
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
}
