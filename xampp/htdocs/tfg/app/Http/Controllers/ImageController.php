<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Image;

class ImageController extends Controller
{

     /**
    * @api {get} /image Recupera la lista de imágenes
    * @apiVersion 1.0.0
    * @apiName GetImage
    * @apiGroup Imagen
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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //Validación de los parámetros
        $this->validate($request, [
            'limit' => 'sometimes|numeric',
            'page' => 'sometimes|numeric'
        ]);

        $limit = ($request->input('page') !== null) ? $request->input('limit') : 20;
        $page = ($request->input('page') !== null) ? $request->input('page') : 0;
        //Devuelve los nodos relacionados con los tags
        return Image::offset($limit*$page)
            ->limit($limit)
            ->get();
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
    * @api {post} /image Almacena una nueva imagen
    * @apiVersion 1.0.0
    * @apiName PostImage
    * @apiGroup Imagen
    *
    * @apiSuccess {Number} id ID de la imagen.
    * @apiSuccess {String} title  Título de la imagen.
    * @apiSuccess {String} description  Descripción de la imagen.
    * @apiSuccess {String} source  Fuente de procedencia de la imagen.
    * @apiSuccess {String} language  Idioma, si procede, de la imagen.
    * @apiSuccess {String} relation  Referencia a un recurso relacionado con la imagen.
    * @apiSuccess {String} coverage  El ámbito, el contexto o la localización de la imagen.
    * @apiSuccess {String} creator  Creador, autor o usuario que subió la imagen.
    * @apiSuccess {String} contributor  Entitdad responsable de hacer contribuciones al contenido de la imagen.
    * @apiSuccess {String} publisher  Entidad responsable de hacer la imagen disponible.
    * @apiSuccess {String} rights  Información sobre los derechos de la imagen.
    * @apiSuccess {Date} date  Una fecha asociada con un evento en el ciclo de vida de la imagen.
    * @apiSuccess {String} type  La naturaleza o género del contenido de la imagen.
    * @apiSuccess {String} format  La manifestación física o digital de la imagen.
    * @apiSuccess {String} identifier  Una referencia no ambigua a una imagen dada.
    * @apiSuccess {String} hashname  Nombre de referencia a la imagen dentro del sistema.
    * @apiSuccess {Date} created_at  Fecha de creación o subida de la imagen.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del contenido de la imagen.
    */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $this->validate($request, [
              'title' => 'max:255',
              'subject' => 'max:511',
              'description' => 'max:1023',
              'source' => 'max:255',
              'language' => 'max:7',
              'relation' => 'max:255',
              'coverage' => 'max:255',
              'creator' => 'max:255',
              'publisher' => 'max:255',
              'contributor' => 'max:255',
              'rights' => 'max:255',
              'date' => 'date',
              'type' => 'max:45',
              'format' => 'max:45',
              'identifier' => 'max:45',
              'hasedName' => 'max:45'
        ]);

        $image = new Image;
        $image->title = $request->input('title');
        $image->subject = $request->input('subject');
        $image->description = $request->input('description');
        $image->source = $request->input('source');
        $image->language = $request->input('language');
        $image->relation = $request->input('relation');
        $image->coverage = $request->input('coverage');
        $image->creator = $request->input('creator');
        $image->publisher = $request->input('publisher');
        $image->contributor = $request->input('contributor');
        $image->rights = $request->input('rights');
        if($request->input('date'))
            $image->date = $request->input('date');
        $image->type = $request->input('type');
        $image->format = $request->input('format');
        $image->identifier = $request->input('identifier');
        $image->hashedName = $request->input('hashedName');

        $user = Auth::user();
        $image->user_id = $user->id;

        DB::transaction(function ()  use ($image){
          $image->saveOrFail();
        });

        return $image;
    }

     /**
    * @api {get} /image/:id Solicita la información de una imagen
    * @apiVersion 1.0.0
    * @apiName GetImageId
    * @apiGroup Imagen
    *
    * @apiParam {Number} id ID único de la imagen.
    *
    * @apiSuccess {Number} id ID de la imagen.
    * @apiSuccess {String} title  Título de la imagen.
    * @apiSuccess {String} description  Descripción de la imagen.
    * @apiSuccess {String} source  Fuente de procedencia de la imagen.
    * @apiSuccess {String} language  Idioma, si procede, de la imagen.
    * @apiSuccess {String} relation  Referencia a un recurso relacionado con la imagen.
    * @apiSuccess {String} coverage  El ámbito, el contexto o la localización de la imagen.
    * @apiSuccess {String} creator  Creador, autor o usuario que subió la imagen.
    * @apiSuccess {String} contributor  Entitdad responsable de hacer contribuciones al contenido de la imagen.
    * @apiSuccess {String} publisher  Entidad responsable de hacer la imagen disponible.
    * @apiSuccess {String} rights  Información sobre los derechos de la imagen.
    * @apiSuccess {Date} date  Una fecha asociada con un evento en el ciclo de vida de la imagen.
    * @apiSuccess {String} type  La naturaleza o género del contenido de la imagen.
    * @apiSuccess {String} format  La manifestación física o digital de la imagen.
    * @apiSuccess {String} identifier  Una referencia no ambigua a una imagen dada.
    * @apiSuccess {String} hashname  Nombre de referencia a la imagen dentro del sistema.
    * @apiSuccess {Date} created_at  Fecha de creación o subida de la imagen.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del contenido de la imagen.
    */

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $image = Image::findOrFail($id);
        return $image;
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
    * @api {put} /image/:id Actualiza la información de una imagen
    * @apiVersion 1.0.0
    * @apiName PutImageId
    * @apiGroup Imagen
    *
    * @apiParam {Number} id ID único de la imagen.
    * @apiParam {Number} id ID de la imagen.
    * @apiParam {String} title  Título de la imagen.
    * @apiParam {String} description  Descripción de la imagen.
    * @apiParam {String} source  Fuente de procedencia de la imagen.
    * @apiParam {String} language  Idioma, si procede, de la imagen.
    * @apiParam {String} relation  Referencia a un recurso relacionado con la imagen.
    * @apiParam {String} coverage  El ámbito, el contexto o la localización de la imagen.
    * @apiParam {String} creator  Creador, autor o usuario que subió la imagen.
    * @apiParam {String} contributor  Entitdad responsable de hacer contribuciones al contenido de la imagen.
    * @apiParam {String} publisher  Entidad responsable de hacer la imagen disponible.
    * @apiParam {String} rights  Información sobre los derechos de la imagen.
    * @apiParam {Date} date  Una fecha asociada con un evento en el ciclo de vida de la imagen.
    * @apiParam {String} type  La naturaleza o género del contenido de la imagen.
    * @apiParam {String} format  La manifestación física o digital de la imagen.
    * @apiParam {String} identifier  Una referencia no ambigua a una imagen dada.
    * @apiParam {String} hashname  Nombre de referencia a la imagen dentro del sistema.
    * @apiParam {Date} created_at  Fecha de creación o subida de la imagen.
    * @apiParam {Date} updated_at  Fecha de última modificación del contenido de la imagen.
    *
    * @apiSuccess {Number} id ID de la imagen.
    * @apiSuccess {String} title  Título de la imagen.
    * @apiSuccess {String} description  Descripción de la imagen.
    * @apiSuccess {String} source  Fuente de procedencia de la imagen.
    * @apiSuccess {String} language  Idioma, si procede, de la imagen.
    * @apiSuccess {String} relation  Referencia a un recurso relacionado con la imagen.
    * @apiSuccess {String} coverage  El ámbito, el contexto o la localización de la imagen.
    * @apiSuccess {String} creator  Creador, autor o usuario que subió la imagen.
    * @apiSuccess {String} contributor  Entitdad responsable de hacer contribuciones al contenido de la imagen.
    * @apiSuccess {String} publisher  Entidad responsable de hacer la imagen disponible.
    * @apiSuccess {String} rights  Información sobre los derechos de la imagen.
    * @apiSuccess {Date} date  Una fecha asociada con un evento en el ciclo de vida de la imagen.
    * @apiSuccess {String} type  La naturaleza o género del contenido de la imagen.
    * @apiSuccess {String} format  La manifestación física o digital de la imagen.
    * @apiSuccess {String} identifier  Una referencia no ambigua a una imagen dada.
    * @apiSuccess {String} hashname  Nombre de referencia a la imagen dentro del sistema.
    * @apiSuccess {Date} created_at  Fecha de creación o subida de la imagen.
    * @apiSuccess {Date} updated_at  Fecha de última modificación del contenido de la imagen.
    */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
              'title' => 'max:255',
              'subject' => 'max:511',
              'description' => 'max:1023',
              'source' => 'max:255',
              'language' => 'max:7',
              'relation' => 'max:255',
              'coverage' => 'max:255',
              'creator' => 'max:255',
              'publisher' => 'max:255',
              'contributor' => 'max:255',
              'rights' => 'max:255',
              'date' => 'date',
              'type' => 'max:45',
              'format' => 'max:45',
              'identifier' => 'max:45',
              'hasedName' => 'max:45'
        ]);

        $image = Image::findOrFail($id);
        if($request->has('title'))
            $image->title = $request->input('title');
        if($request->has('subject'))
            $image->subject = $request->input('subject');
        if($request->has('description'))
            $image->description = $request->input('description');
        if($request->has('source'))
            $image->source = $request->input('source');
        if($request->has('language'))
            $image->language = $request->input('language');
        if($request->has('relation'))
            $image->relation = $request->input('relation');
        if($request->has('coverage'))
            $image->coverage = $request->input('coverage');
        if($request->has('creator'))
            $image->creator = $request->input('creator');
        if($request->has('publisher'))
            $image->publisher = $request->input('publisher');
        if($request->has('contributor'))
            $image->contributor = $request->input('contributor');
        if($request->has('rights'))
            $image->rights = $request->input('rights');
        if($request->has('date'))
            $image->date = $request->input('date');
        if($request->has('type'))
            $image->type = $request->input('type');
        if($request->has('format'))
            $image->format = $request->input('format');
        if($request->has('identifier'))
            $image->identifier = $request->input('identifier');
        if($request->has('hasedName'))
            $image->hasedName = $request->input('hasedName');

        DB::transaction(function ()  use ($image){
          $image->saveOrFail();
        });

        return $image;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $image = Image::findOrFail($id);
        $image->delete();
    }
}
