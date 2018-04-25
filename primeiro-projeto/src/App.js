import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
  render() {
    return ( 
      <button 
        onClick={() => { this.props.handleClick(this.props.label); }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({labelText: labelText}); //ou {labelText} para reduzir ja que tem o mesmo nome
  }

  render() {
    return (
      console.log(this.state),
      <div className="App">
        <MyLabel text={this.state.labelText} />
        <MyButton label="botao 1" handleClick={this.setLabelText}/>
        <MyButton label="botao 2" handleClick={this.setLabelText}/>
        <MyButton label="botao 3" handleClick={this.setLabelText}/>
        <MyButton label="botao 4" handleClick={this.setLabelText}/>
      </div>
    );
  }
}

export default App;
