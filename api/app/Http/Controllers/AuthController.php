<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){

        //se valida la información que viene en $request
        $validatedData = $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|string|max:80',
            'password' => 'required|string|min:8'
        ]);

        //se crea el usuario en la base de datos
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password'])
        ]);

        //se crea token de acceso personal para el usuario
        $token = $user->createToken('auth_token')->plainTextToken;

        //se devuelve una respuesta JSON con el token generado y el tipo de token
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function login(Request $request){
        //valida las credenciales del usuario
        if (!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'message' => 'Invalid access credentials'
            ], 401);
        }

        //Busca al usuario en la base de datos
        $user = User::where('email', $request['email'])->firstOrFail();

        //Genera un nuevo token para el usuario
        $token = $user->createToken('auth_token')->plainTextToken;

        //devuelve una respuesta JSON con el token generado y el tipo de token
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function dataUser(Request $request){
        //devuelve la información del usuario
        return $request->user();
    }

    public function logout(Request $request)
    {
        // Revoke the current user's token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

}
