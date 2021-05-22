import React, { Component } from "react";
import Estabelecimento from "./Estabelecimento";

class EstabelecimentoList extends Component {
    onDelete = id => {
        this.props.onDelete(id);
    }

    onEdit = data => {
        this.props.onEdit(data);
    }

    render() {
        const estabelecimentos = this.props.estabelecimentos;
        return(
            <div className="data">
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        <th>CEP</th>
                        <th>Segmento</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        
                            {estabelecimentos.map(estabelecimento => {
                                    return <Estabelecimento estabelecimento={estabelecimento} key={estabelecimento.id}
                                    onDelete={this.onDelete} 
                                    onEdit={ this.onEdit} />;
                                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EstabelecimentoList;