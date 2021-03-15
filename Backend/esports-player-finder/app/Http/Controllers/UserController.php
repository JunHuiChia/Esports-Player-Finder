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
     * @queryParam name required The name of the user
     * @queryParam email required The email address of the user
     * @queryParam password required The password of the user
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
            'name' => ['required', 'string', 'max:255'],
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
            'name' => $data['name'],
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
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken($request->device_name)->plainTextToken;
    }

    /**
     * Get the currently logged in user
     * 
     * @authenticated
     * 
     * @response {
     *      "id": 2,
     *      "name": "Billss",
     *      "email": "bill@gmail.com",
     *      "email_verified_at": "2021-03-06T18:17:27.000000Z",
     *      "created_at": "2021-03-06T17:02:16.000000Z",
     *      "updated_at": "2021-03-06T17:02:16.000000Z"
     *   }
     * 
     * @group User
     */
    public function get(Request $request) {
        return $request->user();
    }
}
