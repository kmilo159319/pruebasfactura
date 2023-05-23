<?php

namespace App\Models;

use App\Models\customer;
use App\Models\product;
use App\Models\salesDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class salesDocumentDetail extends Model
{
    use HasFactory, HasApiTokens;

    /**
 * The attributes that are mass assignable.
 *
 * @var array<int, string>
 */
protected $fillable = [
    'id_product',
    'id_document',
    'quantity',
    'price_by_unit',
    'total'
];

protected $hidden = [
    'created_at',
    'updated_at'
];

public function products()
{
    return $this->hasMany(product::class,'id','id_product');
}

public function salesDocument(){
    return $this->belongsTo(salesDocument::class,'id_document','id');
}
}
