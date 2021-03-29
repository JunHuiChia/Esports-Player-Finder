<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Register a new user
     * 
     * @Authenticated
     * 
     * @group User
     * 
     * @queryParam username required The username of the user
     * @queryParam email required The email address of the user
     * @queryParam password required The password of the user
     * 
     * @response {
     *     "user": {
     *         "username": "voluptas",
     *         "email": "illum@gmail.com",
     *         "updated_at": "2021-03-16T14:12:56.000000Z",
     *         "created_at": "2021-03-16T14:12:56.000000Z",
     *         "id": 9
     *     },
     *     "message": "registration successful"
     * }
     * 
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();
        $user = $this->create($request->all());
        Auth::guard()->login($user);
        return response()->json([
            'user' => $user,
            'message' => 'registration successful'
        ], 200);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data New user data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     * 
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Attempt to login as a user (SPA Only)
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $authuser = auth()->user();
            return response()->json(['message' => 'Login successful'], 200);
        } else {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }
    }

    /**
     * Logout from a user account (SPA Only)
     *  
     * @response {
     *      "message": "Logged Out"
     *   }
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);
    }

    /**
     * Attempt to create an API token for a user (Non SPA Login)
     * 
     * @queryParam email required The email address of the user
     * @queryParam password required The password of the user
     * @queryParam device_name required The device name for this token
     * @response 1|TOKEN_RESPONSE_EXAMPLE
     * 
     * @param  Illuminate\Http\Request $request
     * @return string 
     */
    public function createToken(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }

        return response()->json(["token" => $user->createToken($request->device_name)->plainTextToken], 200);
    }

    /**
     * Get the currently logged in user
     * 
     * @authenticated
     * 
     * @response {
     *     "id": 1,
     *     "username": "testuser",
     *     "email": "test@gmail.com",
     *     "email_verified_at": null,
     *     "created_at": "2021-03-20T18:55:39.000000Z",
     *     "updated_at": "2021-03-22T20:15:58.000000Z",
     *     "game_roles": [
     *         {
     *             "id": 1,
     *             "game_id": 1,
     *             "name": "testgamerole1",
     *             "created_at": "2021-03-20T18:55:39.000000Z",
     *             "updated_at": "2021-03-20T18:55:39.000000Z",
     *             "user_game_role": {
     *                  "id" : 1,
     *                 "user_id": 1,
     *                 "game_role_id": 1
     *             },
     *             "game": {
     *                 "id": 1,
     *                 "name": "testgame",
     *                 "created_at": "2021-03-20T18:55:57.000000Z",
     *                 "updated_at": "2021-03-20T18:55:58.000000Z"
     *             }
     *         },
     *         {
     *             "id": 2,
     *             "game_id": 1,
     *             "name": "testgamerole2",
     *             "created_at": "2021-03-20T18:55:39.000000Z",
     *             "updated_at": "2021-03-20T18:55:39.000000Z",
     *             "user_game_role": {
     *                  "id" : 2,
     *                 "user_id": 1,
     *                 "game_role_id": 2
     *             },
     *             "game": {
     *                 "id": 1,
     *                 "name": "testgame",
     *                 "created_at": "2021-03-20T18:55:57.000000Z",
     *                 "updated_at": "2021-03-20T18:55:58.000000Z"
     *             }
     *         }
     *     ],
     *     "teams": [
     *         {
     *             "id": 2,
     *             "pivot": {
     *                 "user_id": 1,
     *                 "team_id": 2
     *             }
     *         },
     *         {
     *             "id": 1,
     *             "pivot": {
     *                 "user_id": 1,
     *                 "team_id": 1
     *             }
     *         }
     *     ]
     * }
     * @group User
     */
    public function get(Request $request) {
        return $request->user()->load('gameRoles')->load('gameRoles.game')->load('teams:id');
    }


    /**
     * Update user details of the currently logged in user
     * 
     * @authenticated
     * 
     * @queryParam email The email address to update
     * @queryParam password The password to update
     * @queryParam username The username to update
     * 
     * @response {
     *      "updated" => true
     *   }
     * 
     * @group User
     */
    public function update(Request $request) {
        $request->validate([
            'password' => 'required_without_all:username,email',
            'username' => 'required_without_all:password,email',
            'email' => 'required_without_all:username,password|email'
        ]);

        $user = $request->user();
        if (isset($request->password)){
            $user->password = Hash::make($request->password);
        }
        if (isset($request->username)) {
            $user->username = $request->username;
        }
        if (isset($request->email)) {
            $user->email = $request->email;
        }
        $user->save();

        return response()->json(['updated' => true]);
    }
}
