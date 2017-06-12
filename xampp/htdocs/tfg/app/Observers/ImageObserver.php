<?php

namespace App\Observers;

use App\Image;
use App\Traits\UseElasticsearch;

class ImageObserver
{
    use UseElasticsearch;

    public function creating(Image $image)
    {

    }

    /**
     * Listen to the Image created event.
     *
     * @param  Image  $image
     * @return void
     */
    public function created(Image $image)
    {
        $this->indexElasticsearchModel($image);
    }

    public function updating(Image $image)
    {
   
    }

    public function updated(Image $image)
    {
      $this->indexElasticsearchModel($image);
    }

    public function deleting(Image $image)
    {

    }

    /**
     * Listen to the Image deleted event.
     *
     * @param  Image  $image
     * @return void
     */
    public function deleted(Image $image)
    {
      $this->deleteElasticsearchModel($image);
    }
}
