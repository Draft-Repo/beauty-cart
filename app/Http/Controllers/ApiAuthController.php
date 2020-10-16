<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiAuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */

    protected function login(Request $request)
    {

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match in our records.']
            ], 404);
        }
        $token = $user->createToken('login')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    protected function registration(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);

        if ($validation->fails()) {

            $response = [
                'user' => null,
                'token' => null,
                'error' => $validation->errors()
            ];

            return response($response, 200);

        } else {
            User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);

            $newUser = User::where('email', $request->email)->first();

            $token = $newUser->createToken('login')->plainTextToken;

            $response = [
                'user' => $newUser,
                'token' => $token,
                'error' => null
            ];

            return response($response, 201);

        }

    }

}
