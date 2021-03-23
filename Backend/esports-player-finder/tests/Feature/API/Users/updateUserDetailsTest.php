<?php

namespace Tests\Feature\API\Users;

use App\Models\PersonalAccessToken;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class updateUserDetailsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        User::factory([
            'username' => 'origuser',
            'email' => 'user@original.com',
        ])->create();
        PersonalAccessToken::factory()->create(['tokenable_id' => 2, 'token' => '53b129173d0c2ff3eced17b8e07256ba025b36533f2fb1c358f91d9c177b790f']);
        $this->token = "Bearer 2|PDY6ChyKgjMSkHi6Q8CLhALIGDpArTLZ7GDXZoJq";
    }

    /**
     * Test that unathenticated is returned if the correct token is not included
     *
     * @return void
     */
    public function testUpdateUserDetailsUnathenticated()
    {
        $response = $this->json('PATCH', '/api/users', []);
        $response->assertUnauthorized();
    }

    /**
     * Test updating the username
     *
     * @return void
     */
    public function testUpdateUsername()
    {
        $response = $this->json('PATCH', '/api/users', ["username" => "newname"], ["Authorization" => $this->token]);
        $response->assertSuccessful();
        $response
            ->assertSuccessful()
            ->assertExactJson([
                'updated' => true,
            ]);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'newname',
                'email' => 'user@original.com',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
            ]
        );
    }

    /**
     * Test updating the email
     *
     * @return void
     */
    public function testUpdateEmail()
    {
        $response = $this->json('PATCH', '/api/users', ["email" => "new@test.com"], ["Authorization" => $this->token]);
        $response->assertSuccessful();
        $response
            ->assertSuccessful()
            ->assertExactJson([
                'updated' => true,
            ]);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'origuser',
                'email' => 'new@test.com',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
            ]
        );
    }

    /**
     * Test updating the password
     *
     * @return void
     */
    public function testUpdatePassword()
    {
        $newpass = 'newpass';
        $response = $this->json('PATCH', '/api/users', ["password" => $newpass], ["Authorization" => $this->token]);
        $response
            ->assertSuccessful()
            ->assertExactJson([
                'updated' => true,
            ]);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'origuser',
                'email' => 'user@original.com',
            ]
        )
        ->assertTrue(Hash::check($newpass, User::find(2)->password));
    }

    /**
     * Test updating everything
     *
     * @return void
     */
    public function testUpdateAll()
    {
        $newpass = 'newpassword';
        $params = [
            'user_id' => 2,
            'username' => 'newusername',
            'email' => 'newemail@test.com',
            'password' => $newpass
        ];
        $response = $this->json('PATCH', '/api/users', $params, ["Authorization" => $this->token]);
        $response
            ->assertSuccessful()
            ->assertExactJson([
                'updated' => true,
            ]);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'newusername',
                'email' => 'newemail@test.com'
            ]
        )
        ->assertTrue(Hash::check($newpass, User::find(2)->password));
    }


    /**
     * Test updating with an invalid email
     *
     * @return void
     */
    public function testUpdateInvalidEmail()
    {
        $response = $this->json('PATCH', '/api/users', ['email' => 'test'], ["Authorization" => $this->token]);
        $response->assertStatus(422);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'origuser',
                'email' => 'user@original.com',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
            ]
        );
    }

    /**
     * Test updating with no parameters
     *
     * @return void
     */
    public function testUpdateNoParams()
    {
        $response = $this->json('PATCH', '/api/users', [], ["Authorization" => $this->token]);
        $response->assertStatus(422);
        $this->assertDatabaseHas('users', [
                'id' => '2',
                'username' => 'origuser',
                'email' => 'user@original.com',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
            ]
        );
    }
}
