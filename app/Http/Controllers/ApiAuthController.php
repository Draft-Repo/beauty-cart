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

        if (!$user) {
            return response([
                'error' => ['email' => 'The email is not registered']
            ], 200);
        } else {
            if (!Hash::check($request->password, $user->password)) {
                return response([
                    'error' => ['password' => 'Password does not match']
                ], 200);
            } else {
                $token = $user->createToken('login')->plainTextToken;
                $response = [
                    'user' => $user,
                    'token' => $token,
                    'error' => null
                ];
                return response($response, 200);
            }
        }
    }


    protected function registration(Request $request)

    {
        $validation = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
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

            return $this->login($request);

        }
    }
}
