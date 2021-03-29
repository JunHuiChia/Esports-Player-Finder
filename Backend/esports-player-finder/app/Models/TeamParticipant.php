<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamParticipant extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'team_id',
        'status',
    ];
    public function team()
    {
        return $this->hasOne(Team::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}