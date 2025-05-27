<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
{
    Schema::table('profesores', function (Blueprint $table) {
        if (!Schema::hasColumn('profesores', 'drive')) {
            $table->string('drive')->nullable();
        }
    });
}

    public function down()
    {
        Schema::table('profesores', function (Blueprint $table) {
            $table->dropColumn('drive');
        });
    }
};
