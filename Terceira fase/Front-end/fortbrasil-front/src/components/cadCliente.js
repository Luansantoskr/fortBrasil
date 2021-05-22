import React, { Component } from "react";

class Estabelecimento extends Component {
    render() {
        return(
            <div className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label> Nome: </label>
                        <input type="text" name="nome" placeholder="Nome do cliente" />
                    </div>

                    <div className="four wide field">
                        <label> sobrenome: </label>
                        <input type="text" name="sobrenome" placeholder="Sobrenome" />
                    </div>

                    <div className="four wide field">
                        <label> CPF: </label>
                        <input type="text" name="cpf" placeholder="CPF" />
                    </div>

                    <div className="four wide field">
                        <label> Endereço: </label>
                        <input type="text" name="endereco" placeholder="Endereço" />
                    </div>

                    <div className="four wide field">
                        <label> Número: </label>
                        <input type="text" name="numero" placeholder="Número da casa" />
                    </div>

                    <div className="four wide field">
                        <label> Bairro: </label>
                        <input type="text" name="bairro" placeholder="Bairro" />
                    </div>

                    <div className="four wide field">
                        <label> CEP: </label>
                        <input type="text" name="cep" placeholder="CEP" />
                    </div>

                    <div className="four wide field">
                        <label> Telefone: </label>
                        <input type="text" name="telefone" placeholder="Telefone" />
                    </div>

                    <div className="four wide field">
                        <button className="ui primary button submit"> Criar estabelecimento </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Estabelecimento;