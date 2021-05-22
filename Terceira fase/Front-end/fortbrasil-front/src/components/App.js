import React, { Component } from "react";
import Login from "../pages/Login";
import axios from "axios";
import User from "./cadUser";
import EstabelecimentoList from "./EstabelecimentoList";
import Loader from "./Loader";
import "./app.css";



class App extends Component {

    state = {
        estabelecimentos: [],
        estabelecimento: {},
        loader: false,
        url: "http://localhost:8000/api/estabelecimento"
    };

    getEstabelecimentos = async() => {
        this.setState({ loader: true });
        const estabelecimentos = await axios.get(this.state.url);
        this.setState({ estabelecimentos: estabelecimentos.data, loader: false});
    }
    
    deleteEstabelecimento = async id => {
        this.setState({ loader:true });
        await axios.delete(this.state.url);

        this.getEstabelecimentos();
    }

    editEstabelecimento = async id => {
        this.setState({ loader:true });
        await axios.edit(this.state.url);

        this.getEstabelecimentos();
    }

    onDelete = id => {
        this.deleteEstabelecimento(id);
    };

    onEdit = data => {
        this.setState({ estabelecimento: data});
    };

    componentDidMount(){
        this.getEstabelecimentos();
    }
    render() {
        return(
            <div>
                <Login />
            </div>
        );
        
        return(
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            FortBrasil estabelecimento
                        </a>
                    </div>
                    <div className="ui container">
                        <a href="/cadCliente" className="header item">
                            Cadastro de cliente
                        </a>
                    </div>
                    
                </div>

                <div className="ui main container">
                    <User />
                </div>

                <div className="ui main container">
                    {this.state.loader ? <Loader /> : ""}
                    <EstabelecimentoList estabelecimentos={this.state.estabelecimentos}
                    onDelete={ this.onDelete} 
                    onEdit={ this.onEdit } />
                </div>
            </div>

        );
    }
}

export default App;