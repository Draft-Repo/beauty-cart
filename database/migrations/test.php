<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
//            $table->bigIncrements('id');
            $table->bigInteger('votes');
            $table->binary('data');
            $table->boolean('confirmed');
            $table->char('name', 100);
            $table->date('created_atsd');
            $table->dateTime('creatsded_at', 0);
            $table->dateTimeTz('created_sdfat', 0);
            $table->decimal('amousdsfsfnt', 8, 2);
            $table->double('amousfdsnt', 8, 2);
            $table->enum('level', ['easy', 'hard']);
            $table->float('amount', 8, 2);
            $table->geometry('posisfstions');
            $table->geometryCollection('positigdsgdgdons');
//            $table->increments('ids');
            $table->integer('vosdfsstes');
            $table->ipAddress('visitor');
            $table->json('options');
            $table->jsonb('optisfgdons');
            $table->lineString('positgfdgdgdions');
            $table->longText('descridgfgdption');
            $table->macAddress('device');
//            $table->mediumIncrements('id');
            $table->mediumInteger('votdgdges');
            $table->mediumText('description');
            $table->morphs('taggable');
            $table->uuidMorphs('taggasdsdble');
            $table->multiLineString('positiofsdfsfsns');
            $table->multiPoint('posasdfsfitions');
            $table->multiPolygon('positisdsons');
            $table->nullableMorphs('taggsdfsable');
            $table->nullableUuidMorphs('taggsdsdfsfsable');
            $table->nullableTimestamps(0);
            $table->point('positsdfsion');
            $table->polygon('posisdfstions');
            $table->rememberToken();
            $table->set('flavors', ['strawberry', 'vanilla']);
//            $table->smallIncrements('id');
            $table->smallInteger('votdfgdes');
            $table->softDeletes('deleted_at', 0);
            $table->softDeletesTz('deleted_atdfdd', 0);
            $table->string('namdgdfgde', 100);
            $table->text('descriptifdgdgon');
            $table->time('sunrise', 0);
            $table->timeTz('sunrfgdgdfise', 0);
//            $table->timestamp('added_dsgfgdgdon', 0);
//            $table->timestampTz('added_on', 0);
//            $table->timestamps(0);
//            $table->timestampsTz(0);
//            $table->tinyIncrements('id');
            $table->tinyInteger('votdfgdsdfsfsfses');
            $table->unsignedBigInteger('vodfgdtes');
            $table->unsignedDecimal('amgfdgdount', 8, 2);
            $table->unsignedInteger('votfdgdgddes');
            $table->unsignedMediumInteger('votfdgdgdes');
            $table->unsignedSmallInteger('votdfgdgdges');
            $table->unsignedTinyInteger('votsdfgdes');
            $table->uuid('idd');
            $table->year('birth_year');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test');
    }
}
