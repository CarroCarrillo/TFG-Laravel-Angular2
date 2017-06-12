<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Interfaces\ElasticsearchModel;

class Image extends Model
{
    const ELASTICSEARCH_INDEX = 'images';
    const ELASTICSEARCH_EXCEPTIONS = [ ];
    const RESOURCE_TYPE = 'image';
    const ELASTICSEARCH_ID = 2;
    const ELASTICSEARCH_TYPE = 'image';

    public function getElasticsearchType()
    {
      return self::ELASTICSEARCH_TYPE;
    }

    public function getElasticsearchTypeId()
    {
      return self::ELASTICSEARCH_ID;
    }

    public function getElasticsearchIndex()
    {
      return self::ELASTICSEARCH_INDEX;
    }

    public function getElasticsearchTypeExceptions()
    {
      return self::ELASTICSEARCH_EXCEPTIONS;
    }

    public static function getElasticsearchFields($query)
    {
      return [
        'title' => $query,
        'subject' => $query,
        'description' => $query,
        'source' => $query,
        'language' => $query,
        'relation' => $query,
        'coverage' => $query,
        'creator' => $query,
        'contributor' => $query,
        'publisher' => $query,
        'rights' => $query,
        'date' => $query,
        'type' => $query,
        'format' => $query,
        'identifier' => $query
      ];
    }

    public static function getElasticsearchHighlightFields()
    {
      return [
        'title' => (object)[],
        'subject' => (object)[],
        'description' => (object)[],
        'source' => (object)[],
        'language' => (object)[],
        'creator' => (object)[],
        'date' => (object)[],
        'type' => (object)[],
        'format' => (object)[],
        'identifier' => (object)[]
      ];
    }
}
