import React, { Component } from "react";

class Estabelecimento extends Component {
    onDelete = () => {
       this.props.onDelete(this.props.estabelecimento.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.estabelecimento.id);
     };

    render(){
        const {id, nome, endereco, numero, bairro, cep, segmento} = this.props.estabelecimento;
        return (
            <tr>
            <td style={{ textAlign: "center"}}> {id} </td>
            <td>{nome}</td>
            <td>{endereco}</td>
            <td>{numero}</td>
            <td>{bairro}</td>
            <td>{cep}</td>
            <td>{segmento}</td>
            <td>
                <button className="mini ui blue button" onClick={this.onEdit}> Editar </button>
                <button className="mini ui red button" onClick={this.onDelete}> Deletar </button>
            </td>
            </tr>
        )
    }
}

export default Estabelecimento;