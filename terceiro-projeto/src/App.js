import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

function Botao(props) {
    return (
      <div>
        <button type="button" className="btn btn-warning margem-pequena"
         onClick={() => props.onClick()}>
         { props.mensagem }
         </button>
      </div>
    )
}

function Jumbotron(props) {
  return (
    <div class="jumbotron padding-menor margem-topo">
      {props.item}
    </div>
  )
}

function Tabela(props) {
  return (
    <div>  
      <h4>{props.item.index}</h4> 
      {/* TODO TA DANDO PROBLEMA */}
      <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Hash</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Amout</th>
              <th scope="col">Timestamp</th>
            </tr>
          </thead>
          <tbody>
           {props.item.transactions.map(transaction =>    
            <tr>
              <th scope="row">{transaction.hash}</th>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.timestamp}</td>
            </tr>
            )
           }
          </tbody>
      </table>
    </div>
  )
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

  componentDidMount () {
    this.getCall()
  }

  getCall () {
    axios.get('http://localhost:81/')
      .then(
        response => this.setState(
          {bc: response.data,
          atualizado: true,},
        )
      )
  }

  putCall () {
    axios.put('http://localhost:81/blockchain/closeblock') // TODO pedir pra retornar os blocos
      .then(
        response => this.setState(
            {atualizado: false}
        )
      )
  }

  postCall (obj) {
    axios.post('http://localhost:81/blockchain/',
        { "sender": obj.sender,
          "receiver": obj.receiver,
          "amount": obj.amount }
      )
      .then(
        response => this.setState(
            {atualizado: false}
        )
      )
  }

  render() {
    const items = this.state.bc;
    
    return (
      <div className="App">
        <div className="container">
          <Jumbotron item={
            <FormPut onClickBotao={() => this.postCall()}/>
          } />

          <Jumbotron item={
            <div>
              {!this.state.atualizado && <Botao onClick={() => this.getCall()} mensagem="Refresh"/>}
              <Botao onClick={() => this.putCall()} mensagem="Close block"/>
            </div>              
          } />

          {items.map(item => <Jumbotron item={
            <Tabela item={item}/>
          } />)}

        </div>
      </div>
    );
  }
}


class FormPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "sender": "",
      "receiver": "",
      "amount": 0,
    }
  }

  // https://reactjs.org/docs/forms.html TODO OLHAR ESSE TUTORIAL

  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInput">Sender</label>
            <input className="form-control" placeholder="Enter Sender" required />
          </div>
          <div className="form-group">
            <label for="exampleInput">Receiver</label>
            <input className="form-control" placeholder="Enter Receiver" required />
          </div>
          <div className="form-group">
            <label for="exampleInput">Amount</label>
            <input type="number" step="0.01" className="form-control" placeholder="Enter Amount" required />
          </div>
          <Botao onClick={() => this.props.onClickBotao()} mensagem="Add to block"/>
        </form>
      </div>
    )
  }
}


export default App;
