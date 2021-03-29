<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGameRole extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'game_role_id'
    ];

    public function gameRole()
    {
        return $this->belongsTo(GameRole::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
