import React, { Component } from 'react';
import './App.css';
import BotaoAmarelo from './ComponentesBasicos';

class FormPost extends Component {
    render () {
        return (
        <div className="jumbotron padding-menor margem-topo">
            <form>
            <div className="form-group">
                <label htmlFor="exampleInput">Sender</label>
                <input className="form-control" placeholder="Enter Sender" required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInput">Receiver</label>
                <input className="form-control" placeholder="Enter Receiver" required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInput">Amount</label>
                <input type="number" step="0.01" className="form-control" placeholder="Enter Amount" required />
            </div>
            <BotaoAmarelo onClick={() => this.props.onClickBotao()} mensagem="Add to block"/>
            </form>
        </div>
        )
    }
}

export default FormPost;

