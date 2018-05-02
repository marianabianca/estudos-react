import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Teste extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick()}>Clica clica</button>
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

  handleClick () {
    this.setState({
      bla: !this.state.bla,
    });
    axios.get('http://localhost:5000/')
      .then(response => this.setState(console.log(response.data)))
      // OLHAR ISSO https://stackoverflow.com/questions/33037116/how-to-map-an-objects-keys-to-make-json-easier-to-handle-in-react
  }

  render() {
    const nome = this.state.nome;
    const cond = this.state.bla;
    const bcc = this.state.bc;
    
    return (
      <div className="App">
        <Teste onClick={() => this.handleClick()}/>
          {cond && <div>{nome}</div>}
          {bcc}
      </div>
    );
  }
}

export default App;
