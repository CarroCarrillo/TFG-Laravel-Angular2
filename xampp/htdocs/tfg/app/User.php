<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Interfaces\ElasticsearchModel;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements ElasticsearchModel
{
    use HasApiTokens, Notifiable;

    const ELASTICSEARCH_INDEX = 'users';
    const ELASTICSEARCH_EXCEPTIONS = [ ];
    const RESOURCE_TYPE = 'user';
    const ELASTICSEARCH_ID = 1;
    const ELASTICSEARCH_TYPE = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function images(){
        return $this->hasMany('App\Image');
    }

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
        'name' => $query,
        'surname' => $query,
        'username' => $query,
        'email' => $query
      ];
    }

    public static function getElasticsearchHighlightFields()
    {
      return [
        'name' => (object)[],
        'surname' => (object)[],
        'username' => (object)[],
        'email' => (object)[]
      ];
    }
}
