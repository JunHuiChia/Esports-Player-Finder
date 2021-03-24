<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameRole extends Model
{
    use HasFactory;

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function UserGameRoles()
    {
        return $this->hasMany(UserGameRole::class);
    }

    public function gameRoles()
    {
        return $this->belongsToMany(User::class);
    }
}
