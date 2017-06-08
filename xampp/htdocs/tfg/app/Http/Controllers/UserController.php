<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{

    /**
     * @apiDefine userParams
     * @apiParam {String} name  Nombre del usuario.
     * @apiParam {String} surname  Apellidos del usuario.
     * @apiParam {String} username  Nombre de usuario del usuario.
     * @apiParam {String} email  E-mail del usuario.
     * @apiParam {String} username  Nombre de usuario del usuario.
     * @apiParam {String} password  Contraseña del usuario.
     * @apiParam {String} password_confirmation  Confirmación de la contraseña del usuario.
     * @apiParam {String} [profile_image]  Imagen de perfil del usuario.
     */

    /**
    * @api {get} /user Recupera la lista de usuarios
    * @apiVersion 1.0.0
    * @apiName GetUser
    * @apiGroup Usuario
    *
    * @apiSuccess {Object[]} user Lista de usuarios.
    * @apiSuccess {Number} user.id ID del usuario.
    * @apiSuccess {String} user.name  Nombre del usuario.
    * @apiSuccess {String} user.surname  Apellidos del usuario.
    * @apiSuccess {String} user.username  Nombre de usuario del usuario.
    * @apiSuccess {String} user.email  E-mail del usuario.
    * @apiSuccess {Date} user.created_at  Fecha de registro del usuario.
    * @apiSuccess {Date} user.updated_at  Fecha de última modificación del usuario.
    * @apiSuccess {String} user.profile_image  Imagen de perfil del usuario.
    */

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
    * @api {post} /user Almacena un nuevo usuario
    * @apiVersion 1.0.0
    * @apiName PostUser
    * @apiGroup Usuario
    *
    * @apiUse userParams
    *
    * @apiSuccess {Number} id ID del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {String} surname  Apellidos del usuario.
    * @apiSuccess {String} username  Nombre de usuario del usuario.
    * @apiSuccess {String} email  E-mail del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {Date} created_at  Fecha de registro del usuario.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del usuario.
    * @apiSuccess {String} profile_image  Imagen de perfil del usuario.
    */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validación de los datos
        $this->validate($request,[
            'username' => 'required|unique:users,username|max:45',
            'name' => 'required|max:100',
            'surname' => 'required|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|min:6|confirmed',
            'profile_image' => ''
        ]);
        //Creación del usuario
        $user = new User;
        $user->username = $request->input('username');
        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->password);
        if($request->input('profile_image') !== null)
          $user->profile_image = $request->input('profile_image');
        
        DB::transaction(function ()  use ($user){
            $user->saveOrFail();
        });

        return $user;
    }

    /**
    * @api {get} /user/{id} Recupera un usuario específico
    * @apiVersion 1.0.0
    * @apiName GetUserId
    * @apiGroup Usuario
    *
    * @apiParam {Number} id  ID del usuario.
    *
    * @apiSuccess {Number} id ID del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {String} surname  Apellidos del usuario.
    * @apiSuccess {String} username  Nombre de usuario del usuario.
    * @apiSuccess {String} email  E-mail del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {Date} created_at  Fecha de registro del usuario.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del usuario.
    * @apiSuccess {String} profile_image  Imagen de perfil del usuario.
    */
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
    * @api {get} /me Recupera al usuario logueado
    * @apiVersion 1.0.0
    * @apiName GetMe
    * @apiGroup Usuario
    *
    * @apiSuccess {Number} id ID del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {String} surname  Apellidos del usuario.
    * @apiSuccess {String} username  Nombre de usuario del usuario.
    * @apiSuccess {String} email  E-mail del usuario.
    * @apiSuccess {String} name  Nombre del usuario.
    * @apiSuccess {Date} created_at  Fecha de registro del usuario.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del usuario.
    * @apiSuccess {String} profile_image  Imagen de perfil del usuario.
    */
    public function me(){
        return Auth::user();
    }

    /**
    * @api {get} /user/{id} Recupera las imágenes de un usuario específico
    * @apiVersion 1.0.0
    * @apiName GetUserImages
    * @apiGroup Usuario
    *
    * @apiParam {Number} id  ID del usuario.
    *
    * @apiSuccess {Object[]} image Lista de imágenes.
    * @apiSuccess {Number} image.id ID de la imagen.
    * @apiSuccess {String} image.title  Título de la imagen.
    * @apiSuccess {String} image.description  Descripción de la imagen.
    * @apiSuccess {String} image.source  Fuente de procedencia de la imagen.
    * @apiSuccess {String} image.language  Idioma, si procede, de la imagen.
    * @apiSuccess {String} image.relation  Referencia a un recurso relacionado con la imagen.
    * @apiSuccess {String} image.coverage  El ámbito, el contexto o la localización de la imagen.
    * @apiSuccess {String} image.creator  Creador, autor o usuario que subió la imagen.
    * @apiSuccess {String} image.contributor  Entitdad responsable de hacer contribuciones al contenido de la imagen.
    * @apiSuccess {String} image.publisher  Entidad responsable de hacer la imagen disponible.
    * @apiSuccess {String} image.rights  Información sobre los derechos de la imagen.
    * @apiSuccess {Date} image.date  Una fecha asociada con un evento en el ciclo de vida de la imagen.
    * @apiSuccess {String} image.type  La naturaleza o género del contenido de la imagen.
    * @apiSuccess {String} image.format  La manifestación física o digital de la imagen.
    * @apiSuccess {String} image.identifier  Una referencia no ambigua a una imagen dada.
    * @apiSuccess {String} image.hashname  Nombre de referencia a la imagen dentro del sistema.
    * @apiSuccess {Date} image.created_at  Fecha de creación o subida de la imagen.
    * @apiSuccess {Date} image.updated_at  Fecha de última modificación del contenido de la imagen.
    */
    public function images(Request $request, $id){
        $user = User::findOrFail($id);
        return $user->images;
    }
}
