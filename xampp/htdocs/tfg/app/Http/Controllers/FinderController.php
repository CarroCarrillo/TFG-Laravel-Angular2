<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\UseElasticsearch;
use App\Image;

class FinderController extends Controller
{
    use UseElasticsearch;

    const SCROLL = '30s';

    public function search(Request $request)
    {
      $this->validate($request, [
          'q' => 'required_without:scroll_id|string',
          'scroll_id' => 'required_without:q'
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

      //Definimos el cuerpo de la búsqueda
      $params['body'] = [
        'query' => [
          'query_string' => [
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
