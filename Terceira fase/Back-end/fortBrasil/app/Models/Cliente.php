<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $fillable [
        'nome',
        'sobrenome',
        'cpf',
        'endereco',
        'numero',
        'bairro',
        'cep',
        'telefone'
    ];
}
