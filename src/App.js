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
    this.createDogHouse = this.createDogHouse.bind(this);
    this.createHouse = this.createHouse.bind(this);
    this.createApartment = this.createApartment.bind(this);
  }

  handleCoinClick(e) {
    let incrementedCoin = this.state.coins + 1;
    this.setState({coins: incrementedCoin});
  }

  subtractCoinCount(amount){
    let decrementedCoin = this.state.coins - amount;
    this.setState({coins: decrementedCoin});
  }

  // put logic in following three methods to create house on bottom of page
  createDogHouse(e){

  }

  createHouse(e){

  }

  createApartment(e){

  }

  render() {
    return (
      <div id="game" className="game">
        <Counter coins={this.state.coins} />
        <Character onClick={e => this.handleCoinClick(e)} />
        <Menu
          coins={this.state.coins}
          createDogHouse={e => this.createDogHouse(e)}
          createHouse={e => this.createHouse(e)}
          createApartment={e => this.createApartment(e)}
          subtractCoinCount={this.subtractCoinCount}
        />
      </div>
    );
  }
}

export default App;
