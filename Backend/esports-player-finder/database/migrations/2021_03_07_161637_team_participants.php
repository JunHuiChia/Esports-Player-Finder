<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TeamParticipants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_participants', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('status')->unsigned();
            $table->bigInteger('team_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('team_id')->references('id')->on('teams');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('team_participants');
    }
}
