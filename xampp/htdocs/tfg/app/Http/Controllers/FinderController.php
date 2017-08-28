<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\UseElasticsearch;
use App\Image;
use Log;
class FinderController extends Controller
{
    use UseElasticsearch;

    const SCROLL = '30s';

     /**
    * @api {get} /finder Realiza una búsqueda en el sistema
    * @apiVersion 1.0.0
    * @apiName GetFinder
    * @apiGroup Finder
    *
    * @apiParam {String} q Cadena de consulta.
    * @apiParam {String} scroll_id Identificador que indica la cantidad de scroll realizado.
    * 
    * @apiSuccess {Object[]} hit Lista de resultados de búsqueda.
    * @apiSuccess {Number} hit._id  ID del resultado.
    * @apiSuccess {String} hit._index  Índice del resultado.
    * @apiSuccess {Number} hit._score  Puntuación de coincidencia de la búsqueda con el resultado.
    * @apiSuccess {Object} hit._source  Objeto que es el resultado en sí.
    * @apiSuccess {String} hit._type  Tipo de resultado.
    */

    public function search(Request $request)
    {
      $this->validate($request, [
          'q' => 'required_without:scroll_id|string',
          'scroll_id' => 'required_without:q',
          'fields' => 'array'
      ]);

      if($request->has('scroll_id')) {
        return $this->doScroll($request->input('scroll_id'));
      }

      return $this->doSearch($request);
    }

    private function doSearch(Request $request)
    {

      $query = $request->input('q');
      $page = $request->input('page', 0);
      $limit = $request->input('limit', 20);

      //Crea el array de parámetros que se pasará a Elasticsearch
      $params = [];

      $params['from'] = $limit*$page;
      $params['size'] = $limit;
      $params['scroll'] = self::SCROLL;

      //Definimos los indices en los que se va a buscar
      $params['index'] = $request->input('index', 'images,users');


      //Definimos los tipos en los que se va a buscar
      if($request->has('type'))
      {
        $params['type'] = $request->input('type');
      }

      //Definimos los campos de búsqueda
      $fields = [];
      if($request->has('fields'))
      {
        $fields = $request->input('fields');
      }

      Log::info($fields);

      //Definimos el cuerpo de la búsqueda
      $params['body'] = [
        'query' => [
          'query_string' => [
            'fields' => $fields,
            'query' => $query
          ]
        ],
        "highlight" => [
          'pre_tags' => ["<span class='highlighted'>"],
          'post_tags' => ["</span>"],
          "fields" => [
          ]
        ]
      ];

      return $this->searchElasticsearch($params);
    }

    private function doScroll($scroll_id)
    {
      $params = [
        'scroll' => self::SCROLL,
        'scroll_id' => $scroll_id
      ];

      return $this->scrollElasticsearch($params);
    }
}
