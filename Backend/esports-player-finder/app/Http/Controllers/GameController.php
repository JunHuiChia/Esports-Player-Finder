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
     *    "games": [
     *        {
     *            "id": 1,
     *            "name": "test",
     *            "created_at": "2021-03-20T18:55:52.000000Z",
     *            "updated_at": "2021-03-20T18:55:53.000000Z"
     *        },
     *        {
     *            "id": 2,
     *            "name": "league",
     *            "created_at": "2021-03-20T18:55:57.000000Z",
     *            "updated_at": "2021-03-20T18:55:58.000000Z"
     *        }
     *    ]
     * }
     * 
     * @group Game
     */
    public function all(Request $request) {
        return [
            "games" => Game::all()
        ];
    }
}
