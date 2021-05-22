import React, { Component } from "react";

class Estabelecimento extends Component {
    render() {
        return(
            <div className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label> Nome: </label>
                        <input type="text" name="nome" placeholder="Nome do produto" />
                    </div>

                    <div className="four wide field">
                        <label> Marca: </label>
                        <input type="text" name="marca" placeholder="Marca" />
                    </div>

                    <div className="four wide field">
                        <label> Quantidade: </label>
                        <input type="text" name="quantidade" placeholder="Quantidade" />
                    </div>

                    <div className="four wide field">
                        <label> Preço: </label>
                        <input type="text" name="preco" placeholder="Preço" />
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