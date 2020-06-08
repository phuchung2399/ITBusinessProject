<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'user_id' => 909090,
            'avatar' => '/storage/stores/US0Zzeu30KueBUFE0KUeFM9EcqV0pvL1oQCNxYPi.png',
            'user_name' => 'ga cong nghiep',
            'phone' => '0967258205',
            'email' => 'phuchung2399@gmail.com',
            'password' => '$2y$10$E1Xmh/fFgFXu8xFAGwJ4g.EOJaMCotQSIlXaqM68JRZE.0YS0LaQa',
            'auth' => 'user'
        ]);
    }
}
