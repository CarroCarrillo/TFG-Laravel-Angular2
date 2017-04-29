<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function () {

    //INICIO DE SESIÓN
    Route::post('token', 'LoginController@token');

    // USUARIOS
    Route::get('user', 'UserController@index');
    Route::get('user/{id}', 'UserController@show');
    Route::post('user', 'UserController@store');
    Route::group(['prefix' => 'user/{user}'], function(){
        
    });

    Route::group(['middleware'=>'auth:api'], function(){
        Route::get('me', 'UserController@me');
        Route::put('me', 'UserController@update');
        Route::delete('me', 'UserController@destroy');
    });

    // IMÁGENES
    Route::get('image', 'ImageController@index');
    Route::get('image/{id}', 'ImageController@show');
    Route::group(['middleware'=>'auth:api'], function(){
        Route::post('image', 'ImageController@store');
    });

    //ARCHIVOS
    Route::group(['middleware'=>'auth:api'], function(){
        Route::post('file', 'FileController@store');
    });
});
