<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class team_participants extends Model
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
    public function teams()
    {
        return $this->hasOne(teams::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}