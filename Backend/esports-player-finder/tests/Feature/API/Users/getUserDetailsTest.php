<?php

namespace Tests\Feature\API\Users;

use App\Models\Game;
use App\Models\GameRole;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\UserGameRole;
use Illuminate\Testing\Fluent\AssertableJson;

class getUserDetailsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testUpdateUserDetailsUnathenticated()
    {
        $response = $this->json('GET', '/api/user');
        $response->assertUnauthorized();
    }

    /**
     * Test getting the current user
     *
     * @return void
     */
    public function testGetUser()
    {
        $response = $this->json('GET', '/api/user', [], ["Authorization" => $this->token]);
        $response->assertSuccessful();
        $response
            ->assertSuccessful()
            ->assertExactJson([
                'id' => 1,
                'username' => 'testuser',
                'email' => 'test@example.com',
                'email_verified_at' => '2021-03-06T18:17:27.000000Z',
                'created_at' => '2021-03-06T18:17:27.000000Z',
                'updated_at' => '2021-03-06T18:17:27.000000Z',
                'game_roles' => []
            ]);
    }

    /**
     * Test getting the current user with game roles
     *
     * @return void
     */
    public function testGetUserWithGameRoles()
    {
        
        $game = Game::factory()
            ->count(1)
            ->has(
                GameRole::factory()
                    ->count(2)
                    ->has(UserGameRole::factory(['user_id' => 1]))
                , 'gameRoles')
            ->create();
        $response = $this->json('GET', '/api/user', [], ["Authorization" => $this->token]);
        $response->assertSuccessful();
        $response
            ->assertSuccessful()
            ->assertJson(fn (AssertableJson $json) => 
                $json->where('id', 1)
                        ->where('username', 'testuser')
                        ->where('email', 'test@example.com')
                        ->where('email_verified_at', '2021-03-06T18:17:27.000000Z')
                        ->where('created_at', '2021-03-06T18:17:27.000000Z')
                        ->where('updated_at', '2021-03-06T18:17:27.000000Z')
                        ->has('game_roles', 2)
                        ->has('game_roles.0', fn ($json) =>
                            $json->where('id', 1)
                                    ->where('name', $game[0]->gameRoles[0]->name)
                                    ->has('game', fn ($json) => 
                                        $json->where('id', 1)
                                                ->where('name', $game[0]->name)
                                                ->etc()
                                    )
                                    ->etc()
                        )
                        ->etc()
            );
    }
}
