<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Image;

class ImageController extends Controller
{
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

        $image = new Node;
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
        $image->date = $request->input('date');
        $image->type = $request->input('type');
        $image->format = $request->input('format');
        $image->identifier = $request->input('identifier');
        $image->hasedName = $request->input('hasedName');

        DB::transaction(function ()  use ($image){
          $image->saveOrFail();
        });

        return $image;
    }

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

        $image = Node::findOrFail($id);
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
