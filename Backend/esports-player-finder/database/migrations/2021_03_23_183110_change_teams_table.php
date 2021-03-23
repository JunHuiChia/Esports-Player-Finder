<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (env('DB_CONNECTION', '') !== 'sqlite') { // mysql
            Schema::table('teams', function (Blueprint $table) {
                $table->string('description');
                $table->string('discord_channel_id');
                $table->bigInteger('game_id')->unsigned();
                $table->foreign('game_id')->references('id')->on('games');
                
            });
        }
        else {
            Schema::dropIfExists('teams'); // SQLite
            Schema::create('teams', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->timestamps();

                $table->string('description');
                $table->string('discord_channel_id');
                $table->bigInteger('game_id')->unsigned();
                $table->foreign('game_id')->references('id')->on('games');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (env('DB_CONNECTION', '') !== 'sqlite') { // mysql
            Schema::table('teams', function (Blueprint $table) {
                $table->dropForeign(['game_id']);
                $table->dropColumn('game_id');
                $table->dropColumn('description');
                $table->dropColumn('discord_channel_id');
                
            });
        }
        else { // SQLite
            Schema::dropIfExists('teams'); 
            Schema::create('teams', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->timestamps();
            });
        }
    }
}
