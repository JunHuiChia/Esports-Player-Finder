<?php

namespace App\Http\Controllers;

use App\Models\UserGameRole;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserGameRoleController extends Controller
{
    /**
     * Create new user game role
     * 
     * @Authenticated
     * 
     * @group User Game Role
     * 
     * @queryParam user_id required The id of the user
     * @queryParam game_role_id required The id of the game role
     * 
     * @response {
     *     "created": "true"
     * }
     * 
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        // Validate the request
        $request->validate([
            "user_id" => "required|int|exists:users,id",
            "game_role_id" => "required|int|exists:game_roles,id"
        ]);

        // Create the game role
        $userGameRole = new UserGameRole([
            "user_id" => $request->user_id,
            "game_role_id" => $request->game_role_id
        ]);
        $userGameRole->save();

        // Return response
        return response()->json(['created'=>true], Response::HTTP_CREATED);
    }


    /**
     * Delete user game role
     * 
     * @Authenticated
     * 
     * @group User Game Role
     * 
     * @queryParam user_game_role_id required The id of the users game role
     * 
     * @response {
     *     "deleted": "true"
     * }
     * 
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        // Validate the request
        $request->validate([
            "user_game_role_id" => "required|int|exists:user_game_roles,id",
        ]);

        // Delete the game role
        $userGameRole = UserGameRole::find($request->user_game_role_id);
        $userGameRole->delete();

        // Return response
        return response()->json(['deleted' => true]);
    }
}
