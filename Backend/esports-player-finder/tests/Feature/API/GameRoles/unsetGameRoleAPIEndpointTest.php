<?php

namespace Tests\Feature\API\GameRoles;

use App\Models\Game;
use App\Models\GameRole;
use App\Models\UserGameRole;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class unsetGameRoleAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the authentication works
     *
     * @return void
     */
    public function testUnsetGameRoleAuthenticated()
    {
        Game::factory()
            ->count(1)
            ->has(
                GameRole::factory()
                    ->count(1)
                    ->has(UserGameRole::factory(["user_id"=>1]))
                , 'gameRoles')
            ->create();

        // Check that the record is there to be deleted
        $this->assertDatabaseHas('user_game_roles', [
            'id' => 1
        ]);

        // Sedn delete request
        $response = $this->json('DELETE', '/api/user/gamerole', ["user_game_role_id" => 1], ["Authorization" => $this->token]);
        $response
            ->assertStatus(200)
            ->assertExactJson([
                'deleted' => true,
            ]);
        $this->assertDatabaseMissing('user_game_roles', [
            'id' => '1',
        ]);
    }

    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testUnsetGameRoleUnathenticated()
    {
        $response = $this->json('DELETE', '/api/user/gamerole');

        $response->assertUnauthorized();
    }

    /**
     * Test invalid user_game_role_id
     *
     * @return void
     */
    public function testInvalidUserGameRoleId()
    {
        $response = $this->json('DELETE', '/api/user/gamerole', ["user_game_role_id" => 1], ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test missing user_game_role_id
     *
     * @return void
     */
    public function testMissingUserGameRoleId()
    {
        $response = $this->json('DELETE', '/api/user/gamerole', [], ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

}
