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
            fwrite($file, "<?xml version='1.0'?>\n\n");
            fwrite($file, "<metadata\n");
            fwrite($file, "xmlns='http://example.org/myapp/'\n");
            fwrite($file, "xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n");
            fwrite($file, "xsi:schemaLocation='http://example.org/myapp/ http://example.org/myapp/schema.xsd'\n");
            fwrite($file, "xmlns:dc='http://purl.org/dc/elements/1.1/'>\n");

            if($image->title) fwrite($file, "\n<dc:title>$image->title</dc:title>");
            if($image->subject) fwrite($file, "\n<dc:subject>$image->subject</dc:subject>");
            if($image->description) fwrite($file, "\n<dc:description>$image->description</dc:description>");
            if($image->source) fwrite($file, "\n<dc:source>$image->source</dc:source>");
            if($image->creator) fwrite($file, "\n<dc:creator>$image->creator</dc:creator>");
            if($image->contributor) fwrite($file, "\n<dc:contributor>$image->contributor</dc:contributor>");
            if($image->publisher) fwrite($file, "\n<dc:publisher>$image->publisher</dc:publisher>");
            if($image->language) fwrite($file, "\n<dc:language>$image->language</dc:language>");
            if($image->relation) fwrite($file, "\n<dc:relation>$image->relation</dc:relation>");
            if($image->coverage) fwrite($file, "\n<dc:coverage>$image->coverage</dc:coverage>");
            if($image->date) fwrite($file, "\n<dc:date>$image->date</dc:date>");
            if($image->type) fwrite($file, "\n<dc:type>$image->type</dc:type>");
            if($image->format) fwrite($file, "\n<dc:format>$image->format</dc:format>");
            if($image->identifier) fwrite($file, "\n<dc:identifier>$image->identifier</dc:identifier>");
          
            fwrite($file, "\n\n</metadata>");
            //Fuerza a que se escriban los datos pendientes en el buffer:
            fflush($file);
        }
        // Cerrar el archivo:
        fclose($file);    
    }

    private function generateRDF($file_name, $image)
    {
        $file = fopen($file_name, "w+b");
        
        if ($file == false) {
            echo "Error al crear el archivo";
        } else {
            //Escribir en el archivo:
            fwrite($file, "<rdf:RDF\n");
            fwrite($file, "  xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'\n");
            fwrite($file, "  xmlns:dc='http://purl.org/dc/elements/1.1/'>\n");
            fwrite($file, "<rdf:Description");
            if($image->source) fwrite($file, " rdf:about='$image->source'>\n");
            else fwrite($file, ">\n");

            if($image->title) fwrite($file, "\n  <dc:title>$image->title</dc:title>");
            if($image->subject) fwrite($file, "\n  <dc:subject>$image->subject</dc:subject>");
            if($image->description) fwrite($file, "\n  <dc:description>$image->description</dc:description>");
            if($image->source) fwrite($file, "\n  <dc:source>$image->source</dc:source>");
            if($image->creator) fwrite($file, "\n  <dc:creator>$image->creator</dc:creator>");
            if($image->contributor) fwrite($file, "\n  <dc:contributor>$image->contributor</dc:contributor>");
            if($image->publisher) fwrite($file, "\n  <dc:publisher>$image->publisher</dc:publisher>");
            if($image->language) fwrite($file, "\n  <dc:language>$image->language</dc:language>");
            if($image->relation) fwrite($file, "\n  <dc:relation>$image->relation</dc:relation>");
            if($image->coverage) fwrite($file, "\n  <dc:coverage>$image->coverage</dc:coverage>");
            if($image->date) fwrite($file, "\n  <dc:date>$image->date</dc:date>");
            if($image->type) fwrite($file, "\n  <dc:type>$image->type</dc:type>");
            if($image->format) fwrite($file, "\n  <dc:format>$image->format</dc:format>");
            if($image->identifier) fwrite($file, "\n  <dc:identifier>$image->identifier</dc:identifier>");
          
            fwrite($file, "\n\n</rdf:Description>");
            fwrite($file, "\n</rdf:RDF>");
            //Fuerza a que se escriban los datos pendientes en el buffer:
            fflush($file);
        }
        // Cerrar el archivo:
        fclose($file); 
    }
}
