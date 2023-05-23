<?php

namespace App\Models;

use App\Models\salesDocumentDetail;
use App\Models\customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class salesDocument extends Model
{
    use HasFactory, HasApiTokens;

    /**
 * The attributes that are mass assignable.
 *
 * @var array<int, string>
 */
protected $fillable = [
    'id_customer',
    'user_id',
    'general_description',
    'general_total'
];

protected $hidden = [
    'created_at',
    'updated_at'
];


public function salesDocumentDetail()
{
    return $this->hasMany(salesDocumentDetail::class,'id_document','id');
}

public function customer(){
    return $this->belongsTo(customer::class,'id_customer','id');
}
}
