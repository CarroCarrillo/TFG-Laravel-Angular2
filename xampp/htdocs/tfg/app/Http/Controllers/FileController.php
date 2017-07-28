<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    * @api {post} /file Almacena un nuevo archivo
    * @apiVersion 1.0.0
    * @apiName PostFile
    * @apiGroup File
    *
    * @apiParam {File} file  Archivo a guardar.
    *
    * @apiSuccess {String} hashedName Ubicación del archivo con su nuevo nombre.
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
          'file' => 'required|file'
        ]);

        $directory = Auth::user()->id . '/' . date('Y-m-d');
        $path = $request->file('file')->store($directory);

        return $path;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
    * @api {get} /file Recupera un archivo DC/XML o RDF
    * @apiVersion 1.0.0
    * @apiName GetFile
    * @apiGroup File
    *
    * @apiParam {Number} id  ID de la imagen a descargar como Dublin Core.
    * @apiParam {String} type  Indica si se descargará como DC/XML o RDF.
    *
    * @apiSuccess {File} file Archivo con la información Dublin Core.
    */
    public function download(Request $request, $id)
    {
        $this->validate($request, [
          'type' => 'required|in:dc,rdf'
        ]);
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
}
