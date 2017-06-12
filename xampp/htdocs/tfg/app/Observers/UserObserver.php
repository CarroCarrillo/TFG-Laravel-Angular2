<?php

namespace App\Observers;

use App\User;
use App\Traits\UseElasticsearch;

class UserObserver
{
    use UseElasticsearch;

    public function creating(User $user)
    {

    }

    /**
     * Listen to the user created event.
     *
     * @param  User  $user
     * @return void
     */
    public function created(User $user)
    {
        $this->indexElasticsearchModel($user);
    }

    public function updating(User $user)
    {
   
    }

    public function updated(User $user)
    {
      $this->indexElasticsearchModel($user);
    }

    public function deleting(User $user)
    {

    }

    /**
     * Listen to the User deleted event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleted(User $user)
    {
      $this->deleteElasticsearchModel($user);
    }
}
