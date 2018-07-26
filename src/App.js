import React, { Component } from 'react';
import './App.css';
import Character from './character.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: 0,
    }
    this.handleCoinClick = this.handleCoinClick.bind(this);
  }

  handleCoinClick(e) {
    let incrementedCoin = this.state.coins + 1;
    this.setState({coins: incrementedCoin});
  }

  render() {
    return (
      <div id="game" className="game">
        <Character onClick={e => this.handleCoinClick(e)} />
      </div>
    );
  }
}

export default App;
