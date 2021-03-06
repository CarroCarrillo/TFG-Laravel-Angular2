<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
          'username' => 'admin',
          'password' => bcrypt('admin'),
          'email' => 'admin@tfg.es',
          'name' => 'Admin',
          'surname' => 'TFG',
          'profile_image' => '/assets/admin/profile.png'
        ]);
    }
}
