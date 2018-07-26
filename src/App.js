import React, { Component } from 'react';
import './css/app.css';
import Character from './character.js';
import Counter from './counter.js';
import Menu from './component/Menu'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: 0,
    }
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.subtractCoinCount = this.subtractCoinCount.bind(this);
  }

  handleCoinClick(e) {
    let incrementedCoin = this.state.coins + 1;
    this.setState({coins: incrementedCoin});
  }

  subtractCoinCount(amount){
    let decrementedCoin = this.state.coins - amount;
    this.setState({coins: decrementedCoin});
  }

  render() {
    return (
      <div id="game" className="game">
        <Counter coins={this.state.coins} />
        <Character onClick={e => this.handleCoinClick(e)} />
        <Menu
          coins={this.state.coins}
          subtractCoinCount={this.subtractCoinCount}
        />
      </div>
    );
  }
}

export default App;
