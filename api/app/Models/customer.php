<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class customer extends Model
{
    use HasFactory, HasApiTokens;

    /**
 * The attributes that are mass assignable.
 *
 * @var array<int, string>
 */
protected $fillable = [
    'type_identification',
    'number_identification',
    'name'
];

protected $hidden = [
    'created_at',
    'updated_at'
];
}
