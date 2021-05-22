import React, { Component } from "react";

class Estabelecimento extends Component {
    render() {
        return(
            <div className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label> Nome: </label>
                        <input type="text" name="nome" placeholder="Nome do estabelecimento" />
                    </div>

                    <div className="four wide field">
                        <label> Endereço: </label>
                        <input type="text" name="endereco" placeholder="Endereço do estabelecimento" />
                    </div>

                    <div className="four wide field">
                        <label> Número: </label>
                        <input type="text" name="numero" placeholder="Numero do estabelecimento" />
                    </div>

                    <div className="four wide field">
                        <label> Bairro: </label>
                        <input type="text" name="bairro" placeholder="Bairro do estabelecimento" />
                    </div>

                    <div className="four wide field">
                        <label> CEP: </label>
                        <input type="text" name="cep" placeholder="CEP do estabelecimento" />
                    </div>

                    <div className="four wide field">
                        <label> Segmento: </label>
                        <input type="text" name="segmento" placeholder="Segmento do estabelecimento" />
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