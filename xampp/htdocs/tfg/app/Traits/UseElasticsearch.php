<?php
namespace App\Traits;

use Elasticsearch\ClientBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

trait UseElasticsearch {

  private $elasticsearchClient;

  public function indexElasticsearchModel(Model $model) {
    if(in_array($model->getElasticsearchTypeId(), $model->getElasticsearchTypeExceptions()))
      return;

    if($model instanceof \App\Interfaces\ElasticsearchModel) {
      $client = $this->getElasticsearchClient();
      //Log::debug(var_export($model->toArray(), true));
      $client->index([
              'index' => $model->getElasticsearchIndex(),
              'type' => $model->getElasticsearchType(),
              'id' => $model->getKey(),
              'body' => $model->toArray()
          ]);
    } else {
      abort(500, "Se esta tratando de indexar en Elasticsearch un modelo sin ElasticsearchModel");
    }
  }

  public function deleteElasticsearchModel(Model $model) {
    if(in_array($model->getElasticsearchTypeId(), $model->getElasticsearchTypeExceptions()))
      return;

    if($model instanceof \App\Interfaces\ElasticsearchModel) {
      $client = $this->getElasticsearchClient();
      $client->delete([
              'index' => $model->getElasticsearchIndex(),
              'type' => $model->getElasticsearchType(),
              'id' => $model->getKey(),
          ]);
    } else {
      abort(500, "Se esta tratando de indexar en Elasticsearch un modelo sin ElasticsearchModel");
    }
  }

  private function getElasticsearchClient()
  {
    if(empty($this->elasticsearchClient)) {
      $this->elasticsearchClient = ClientBuilder::create()->build();
    }

    return $this->elasticsearchClient;
  }

  private function searchElasticsearch($params)
  {
    $client = $this->getElasticsearchClient();

    return $client->search($params);
  }

  private function scrollElasticsearch($params)
  {
    $client = $this->getElasticsearchClient();

    return $client->scroll($params);
  }
}
