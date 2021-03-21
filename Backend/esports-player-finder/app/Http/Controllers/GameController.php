<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Get all games
     * 
     * @authenticated
     * 
     * @response {
     *     "games": [
     *         {
     *             "id": 1,
     *             "name": "test",
     *             "created_at": "2021-03-20T18:55:52.000000Z",
     *             "updated_at": "2021-03-20T18:55:53.000000Z",
     *             "game_roles": []
     *         },
     *         {
     *             "id": 2,
     *             "name": "league",
     *             "created_at": "2021-03-20T18:55:57.000000Z",
     *             "updated_at": "2021-03-20T18:55:58.000000Z",
     *             "game_roles": [
     *                 {
     *                     "id": 1,
     *                     "game_id": 2,
     *                     "name": "jungler",
     *                     "created_at": null,
     *                     "updated_at": null
     *                 },
     *                 {
     *                     "id": 2,
     *                     "game_id": 2,
     *                     "name": "mid",
     *                     "created_at": null,
     *                     "updated_at": null
     *                 },
     *                 {
     *                     "id": 3,
     *                     "game_id": 2,
     *                     "name": "support",
     *                     "created_at": null,
     *                     "updated_at": null
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * 
     * @group Game
     */
    public function all(Request $request) {
        return [
            "games" => Game::with('gameRoles')->get()
        ];
    }
}
