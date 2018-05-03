import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Botao extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-primary branco"
         onClick={() => this.props.onClick()}>
         { this.props.mensagem }
         </button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bla: true,
      nome: "mariana",
      bc: [],
    }
  }

  getCall () {
    axios.get('http://localhost:5000/')
      .then(response => this.setState({bc: response.data}))
  }

  putCall () {
    axios.put('http://localhost:5000/blockchain/closeblock')
      .then(
        response => this.setState({bc: response.data})
      )  // TODO AJEITAR ISSO
  }

  render() {
    const nome = this.state.nome;
    const cond = this.state.bla;
    const items = this.state.bc;
    
    return (
      <div className="App">
        <Botao onClick={() => this.getCall()} mensagem="clica"/>
        <Botao onClick={() => this.putCall()} mensagem="clica put"/>
          {cond && <div>{nome}</div>}
        <ul>
          {items.map(item => <li>{item.index}</li>)} {/* VER COMO FUNCIONA ESSES INDICES */}
        </ul>
      </div>
    );
  }
}

export default App;
