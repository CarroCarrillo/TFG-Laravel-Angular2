<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;
use App\Traits\UseElasticsearch;
use App\User;
use App\Image;

class ElasticsearchReset extends Command
{
    use UseElasticsearch;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'elasticsearch:reset';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset elasticsearch indexes';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //shell_exec ("curl -XDELETE 'http://localhost:9200/_all'");
        User::chunk(200, function ($users) {
            foreach ($users as $user) {
                $this->indexElasticsearchModel($user);
            }
        });
        Image::chunk(200, function ($images) {
            foreach ($images as $image) {
                $this->indexElasticsearchModel($image);
            }
        });
    }
}