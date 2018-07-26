import React, { Component } from 'react';
import './css/app.css';
import Character from './character.js';
import Counter from './counter.js';
import Menu from './component/Menu'

class App extends Component {
  constructor(props) {
    super(props);

    this.houseList = [
      {
        type: 'Dog House',
        price: 1
      },
      {
        type: 'House',
        price: 2
      },
      {
        type: 'Apartment',
        price: 3
      }
    ];

    this.state = {
      coins: 0,
      showGame: false,
      dogHousePurchaseDisabled: true,
      housePurchaseDisabled: true,
      apartmentPurchaseDisabled: true
    }
    this.handleToggleGame = this.handleToggleGame.bind(this);
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.subtractCoinCount = this.subtractCoinCount.bind(this);
    this.createDogHouse = this.createDogHouse.bind(this);
    this.createHouse = this.createHouse.bind(this);
    this.createApartment = this.createApartment.bind(this);
  }

  handleCoinClick(e) {
    let incrementedCoin = this.state.coins + 1;
    this.setState({
      coins: incrementedCoin,
      dogHousePurchaseDisabled: incrementedCoin < this.houseList[0].price,
      housePurchaseDisabled: incrementedCoin < this.houseList[1].price,
      apartmentPurchaseDisabled: incrementedCoin < this.houseList[2].price
    });
  }

  subtractCoinCount(amount){
    let decrementedCoin = this.state.coins - amount;
    this.setState({
      coins: decrementedCoin,
      dogHousePurchaseDisabled: decrementedCoin < this.houseList[0].price,
      housePurchaseDisabled: decrementedCoin < this.houseList[1].price,
      apartmentPurchaseDisabled: decrementedCoin < this.houseList[2].price
    });
  }

  // put logic in following three methods to create house on bottom of page
  createDogHouse(e){

  }

  createHouse(e){

  }

  createApartment(e){

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
            <Menu
              houseList = {this.houseList}
              dogHousePurchaseDisabled = {this.state.dogHousePurchaseDisabled}
              housePurchaseDisabled = {this.state.housePurchaseDisabled}
              apartmentPurchaseDisabled = {this.state.apartmentPurchaseDisabled}
              createDogHouse={e => this.createDogHouse(e)}
              createHouse={e => this.createHouse(e)}
              createApartment={e => this.createApartment(e)}
              subtractCoinCount={this.subtractCoinCount}
            />
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
