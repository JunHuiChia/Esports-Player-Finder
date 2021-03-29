<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\Models\PersonalAccessToken;
use App\Models\User;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected string $token;

    protected function setUp(): void
    {
        parent::setUp();
        User::factory([
            'username' => 'testuser',
            'email' => 'test@example.com',
            'email_verified_at' => '2021-03-06T18:17:27.000000Z',
            'created_at' => '2021-03-06T18:17:27.000000Z',
            'updated_at' => '2021-03-06T18:17:27.000000Z'
        ])->create();
        PersonalAccessToken::factory()->create();
        $this->token = "Bearer 1|SYHlJ5taBiFjLcwNcV8J90RCGpn4Cd7DYCsAwXqN";
    }
}
