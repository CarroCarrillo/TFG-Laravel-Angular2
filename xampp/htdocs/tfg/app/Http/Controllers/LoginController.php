<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\AccessTokenCreated;

class LoginController extends Controller
{
    /**
    * @api {post} /token Realiza el inicio de sesión recuperando el token
    * @apiVersion 1.0.0
    * @apiName postToken
    * @apiGroup Login
    *
    * @apiParam {String} username  Nombre del usuario o correo electrónico.
    * @apiParam {String} password  Contraseña.
    *
    * @apiSuccess {String} token_type Tipo de token.
    * @apiSuccess {Number} expires_in Duración del token.
    * @apiSuccess {String} access_token  Token de acceso.
    * @apiSuccess {String} refresh_token Token de refresco para obtener un nuevo token cuando acaba su duración.
    */
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
