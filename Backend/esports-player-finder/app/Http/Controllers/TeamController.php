<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Teams;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class TeamController extends Controller
{
    public function createTeam(Request $request) {
        $this->validator($request->all())->validate();
        $team_name = $request->only('team_name');
        $user = User::where('PlainTextToken', $request->remember_token)->first();
        Auth::guard()->create($team_name,$user);
        return response()->json([
            'team_name' => $team_name,
            'user' => $user,
            'message' => 'team registration successful'
        ], 200);
    }

    protected function create(array $data)
    {
        return Teams::create([
            'team_name' => $data['team_name'],
            'owner' => $data['user'],
        ]);
    }


    protected function validator(array $data)
    {
         return Validator::make($data, [
          'team_name' => ['required', 'string', 'max:255', 'unique'],
          'owner' => ['required', 'string', 'max:255', 'unique:users'],
       ]);
    }
}