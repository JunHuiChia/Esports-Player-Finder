<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'discord_channel_id',
        'game_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'team_created_at' => 'datetime',
    ];
    public function matches()
    {
        return $this->hasMany(matches::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}