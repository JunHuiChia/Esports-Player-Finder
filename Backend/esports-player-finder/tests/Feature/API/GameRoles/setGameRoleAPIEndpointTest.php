<?php

namespace Tests\Feature\API\GameRoles;

use App\Models\Game;
use App\Models\GameRole;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class setGameRoleAPIEndpointTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testSetGameroleUnathenticated()
    {
        $response = $this->json('POST', '/api/user/gamerole');

        $response->assertUnauthorized();
    }

    /**
     * Test setting the game role with missing role id
     *
     * @return void
     */
    public function testSetGameroleWithoutRoleId()
    {
        $params = [
            "user_id" => 1,
        ];
        Game::factory()
            ->count(1)
            ->has(GameRole::factory()->count(1), 'gameRoles')
            ->create();
        $response = $this->json('POST', '/api/user/gamerole', $params, ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test setting game role with missing user id
     *
     * @return void
     */
    public function testSetGameroleWithoutUserId()
    {
        Game::factory()
            ->count(1)
            ->has(GameRole::factory()->count(1), 'gameRoles')
            ->create();
        $params = [
            "game_role_id" => 1
        ];
        $response = $this->json('POST', '/api/user/gamerole', [], ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test setting game role with invalid role id
     *
     * @return void
     */
    public function testSetGameroleWithInvalidRoleId()
    {
        $params = [
            "user_id" => 1,
            "game_role_id" => 1
        ];
        $response = $this->json('POST', '/api/user/gamerole', $params, ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test setting game role with invalid user id
     *
     * @return void
     */
    public function testSetGameroleWithInvalidUserId()
    {
        Game::factory()
            ->count(1)
            ->has(GameRole::factory()->count(1), 'gameRoles')
            ->create();
        $params = [
            "user_id" => 2,
            "game_role_id" => 1
        ];
        $response = $this->json('POST', '/api/user/gamerole', $params, ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test setting game role with no parameters
     *
     * @return void
     */
    public function testSetGameroleWithNoParameters()
    {
        $response = $this->json('POST', '/api/user/gamerole', [], ["Authorization" => $this->token]);
        $response->assertStatus(422);
    }

    /**
     * Test set game role with valid parameters
     *
     * @return void
     */
    public function testSetGameroleWithValidParameters()
    {
        Game::factory()
            ->count(1)
            ->has(GameRole::factory()->count(1), 'gameRoles')
            ->create();

        $params = [
            "user_id" => 1,
            "game_role_id" => 1
        ];
        $response = $this->json('POST', '/api/user/gamerole', $params, ["Authorization" => $this->token]);
        $response
            ->assertStatus(201)
            ->assertExactJson([
                'created' => true,
            ]);
        $this->assertDatabaseHas('user_game_roles', [
            'game_role_id' => '1',
            'user_id' => '1',
        ]);
    }
}
