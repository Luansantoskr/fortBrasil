import React, { Component } from "react";

class Estabelecimento extends Component {
    render() {
        return(
            <div className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label> Nome: </label>
                        <input type="text" name="name" placeholder="Nome" />
                    </div>

                    <div className="four wide field">
                        <label> Email: </label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>

                    <div className="four wide field">
                        <label> Senha: </label>
                        <input type="password" name="password" placeholder="Senha" />
                    </div>

                    <div className="four wide field">
                        <label> Confirmação de senha: </label>
                        <input type="password" name="confirmation_password" placeholder="Confirmação de senha" />
                    </div>

                    <div className="four wide field">
                        <button className="ui primary button submit"> Criar Usuario </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Estabelecimento;