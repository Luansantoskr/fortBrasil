<?php

namespace App\Http\Controllers;

use App\Models\Estabelecimento;
use App\Http\Resources\Estabelecimento as EstabelecimentoResource;
use Illuminate\Http\Request;

class EstabelecimentoController extends Controller
{
    /**
     * Retorna os estabelecimentos cadastrados.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Estabelecimento::all();
    }

    /**
     * Mostra o formulário para criação do estabelecimento.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Cria um novo estabelecimento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|min:3|max:100',
            'endereco' => 'required|min:5|max:200',
            'numero' => 'required',
            'bairro' => 'required',
            'cep' => 'nullable',
            'segmento' => 'required'
        ]);

        return Estabelecimento::create($request->all());
    }

    /**
     * Mostra um estabelecimento específico pelo campo id.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Estabelecimento::find( $id );
    }

    /**
     * Atualiza os dados do cadastro.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $estabelecimento = Estabelecimento::findOrFail( $id );
        $estabelecimento->update($request->all());

        return $estabelecimento;
    }

    /**
     * Deleta um estabelecimento do banco de dados.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Estabelecimento::destroy($id);
    }

    /**
     * Procurar pelo nome.
     *
     * @param  str  $nome
     * @return \Illuminate\Http\Response
     */
    public function search($nome)
    {
        return Estabelecimento::where('nome', 'like', '%'.$nome.'%')->get();
    }
}
