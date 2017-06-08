<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('subject')->nullable();
            $table->text('description')->nullable();
            $table->string('source')->nullable();
            $table->string('language')->nullable();
            $table->string('relation')->nullable();
            $table->string('coverage')->nullable();
            $table->string('creator')->nullable();
            $table->string('contributor')->nullable();
            $table->string('publisher')->nullable();
            $table->string('rights')->nullable();
            $table->date('date')->nullable();
            $table->string('type')->nullable();
            $table->string('format')->nullable();
            $table->string('identifier')->nullable();
            $table->string('hashedName')->nullable();
            $table->bigInteger('user_id')->nullable()->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
