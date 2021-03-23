<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Team;
use App\Models\TeamParticipant;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class TeamController extends Controller
{
     /**
     * Create new team for currently logged in user
     * 
     * @Authenticated
     * 
     * @group Teams
     * 
     * @queryParam name required The name of the team
     * @queryParam description required The description of the team
     * @queryParam game_id required The game the team is for
     * @queryParam discord_channel_id required The discord channel the team uses
     * 
     * @response {
     *     "created": true
     * }
     * 
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request) {
        $this->validator($request->all())->validate();
        $user = $request->user();
        $team = Team::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'game_id' => $request['game_id'],
            'discord_channel_id' => $request['discord_channel_id'],
        ]);

        TeamParticipant::create([
            'team_id' => $team->id,
            'user_id' => $user->id,
            'status' => 0, # 0 = owner 1 = member
        ]);

        return response()->json([
            'created' => true
        ], 201);
    }


    protected function validator(array $data)
    {
         return Validator::make($data, [
          'name' => ['required', 'string', 'max:255', 'unique:teams'],
          'description' => ['required', 'string', 'max:255'],
          'game_id' => ['required', 'int', 'exists:games,id'],
          'discord_channel_id' => ['required', 'string', 'max:255'],
       ]);
    }
}