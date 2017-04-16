<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\AccessTokenCreated;

class LoginController extends Controller
{
    public function token(Request $request)
    {
        $http = new \GuzzleHttp\Client(['http_errors' => false, 'verify' => false]);
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $response = $http->post(url('/oauth/token'), [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => 2,
                'client_secret' => 'lzNrIrCHipd4vUVERVnjoqOUr1JtESTowfaEtKYO',
                'username' => $request->input('username'),
                'password' => $request->input('password'),
                'scope' => '',
            ],
        ]);

        return $response;
    }
}
