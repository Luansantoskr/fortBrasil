<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstabelecimentoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\ClienteController;

// Rotas publicas
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/estabelecimento', [EstabelecimentoController::class, 'index']);
Route::get('/estabelecimento/{id}', [EstabelecimentoController::class, 'show']);
Route::get('/estabelecimento/search/{nome}', [EstabelecimentoController::class, 'search']);

//Rotas publicas de produto
Route::get('/produto', [ProdutoController::class, 'index']);
Route::get('/produto/{id}', [ProdutoController::class, 'show']);
Route::get('/produto/search/{nome}', [ProdutoController::class, 'search']);

//Rotas publicas de cliente
Route::get('/cliente', [ClienteController::class, 'index']);
Route::get('/cliente/{id}', [ClienteController::class, 'show']);
Route::get('/cliente/search/{nome}', [ClienteController::class, 'search']);


//Rotas privadas
Route::group(['middleware' => ['auth:sanctum']], function (){
    // Rotas de estabelecimento
    Route::post('/estabelecimento', [EstabelecimentoController::class, 'store']);
    Route::put('/estabelecimento/{id}', [EstabelecimentoController::class, 'update']);
    Route::delete('/estabelecimento/{id}', [EstabelecimentoController::class, 'destroy']);
    Route::post('/logout', [UserController::class, 'logout']);
     
});

Route::group(['middleware' => ['auth:sanctum']], function (){
    // Rotas de produto
    Route::post('/produto', [ProdutoController::class, 'store']);
    Route::put('/produto', [ProdutoController::class, 'update']);
    Route::delete('/produto', [ProdutoController::class, 'destroy']);

});

Route::group(['middleware' => ['auth:sanctum']], function (){
    // Rotas de cliente
    Route::post('/cliente', [ClienteController::class, 'store']);
    Route::put('/cliente', [ClienteController::class, 'update']);
    Route::delete('/cliente', [ClienteController::class, 'destroy']);

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
