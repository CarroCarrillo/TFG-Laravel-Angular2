<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Image;

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

        $type = $request->input('type');
        $image = Image::findOrFail($id);
        $file;
        if($type == 'dc')
        { 
            $file = storage_path() . "\\app\\$image->id.xml";
            $this->generateDC($file, $image);
        }
        else{
            $file = storage_path() . "\\app\\$image->id.rdf";
            $this->generateRDF($file, $image);
        }

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $content_type = finfo_file($finfo, $file);
        $headers[] = header("Content-Type: $content_type");
          
        return response()->download($file);
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

    private function generateDC($file_name, $image)
    {
        $file = fopen($file_name, "w+b");
        
        if ($file == false) {
            echo "Error al crear el archivo";
        } else {
            //Escribir en el archivo:
            fwrite($file, "<?xml version='1.0'?>\n
<metadata
xmlns='http://example.org/myapp/'
xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'
xsi:schemaLocation='http://example.org/myapp/ http://example.org/myapp/schema.xsd'
xmlns:dc='http://purl.org/dc/elements/1.1/'>\n");

            if($image->title) fwrite($file, "<dc:title>$image->title</dc:title>");
          
            fwrite($file, "\n</metadata>");
            //Fuerza a que se escriban los datos pendientes en el buffer:
            fflush($file);
        }
        // Cerrar el archivo:
        fclose($file);    
    }

    private function generateRDF($id)
    {

    }
}
