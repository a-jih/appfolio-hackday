import React, { Component } from 'react';
import './css/app.css';
import Character from './character.js';
import Counter from './counter.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: 0,
      showGame: false,
    }
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.handleToggleGame = this.handleToggleGame.bind(this);
  }

  handleCoinClick(e) {
    const incrementedCoin = this.state.coins + 1;
    this.setState({coins: incrementedCoin});
  }

  handleToggleGame(e) {
    const showGame = !this.state.showGame;
    this.setState({showGame});
  }

  render() {
    return (
      <div>
        {this.state.showGame &&
          <div id="game" className="game">
            <Counter coins={this.state.coins} />
            <Character onClick={this.handleCoinClick} />
          </div>
        }
        <button onClick={this.handleToggleGame}>
          {this.state.showGame ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default App;
