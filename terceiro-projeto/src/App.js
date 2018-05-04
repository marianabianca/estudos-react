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
      atualizado: true,
    }
  }

  getCall () {
    axios.get('http://localhost:5000/')
      .then(
        response => this.setState(
          {bc: response.data,
          atualizado: true,}
      )
    )
  }x

  putCall () {
    axios.put('http://localhost:5000/blockchain/closeblock') // TODO pedir pra retornar os blocos
      .then(
        response => this.setState(
          console.log("ok"),
          this.setState({
            atualizado: false,
          })
        )
      )
  }

  // TODO FAZER FUNAO PRA LISTAR OS BLOCOS

  render() {
    const items = this.state.bc;
    this.getCall();
    
    return (
      <div className="App">
        <Botao onClick={() => this.putCall()} mensagem="clica put"/>
        {!this.state.atualizado && <Botao onClick={() => this.getCall()} mensagem="atualizar"/>}
        <ul>
          {items.map(item => <li>{item.index}</li>)} {/* VER COMO FUNCIONA ESSES INDICES */}
        </ul>
      </div>
    );
  }
}

export default App;
