<?php

namespace App\Interfaces;

interface ElasticsearchModel {
  public function getElasticsearchIndex();
  public function getElasticsearchType();
  public function getElasticsearchTypeId();
  public function getElasticsearchTypeExceptions();
  public static function getElasticsearchFields($query);
  public static function getElasticsearchHighlightFields();
}