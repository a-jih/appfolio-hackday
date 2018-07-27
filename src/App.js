import React, { Component } from 'react';
import './css/app.css';
import {Popover, PopoverHeader, PopoverBody, Button} from 'reactstrap';
import Character from './character.js';
import Counter from './counter.js';
import Menu from './component/Menu'

import Property from './component/Property';
import UnitStore from './stores/UnitStore';
import UnitList from './stores/UnitList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.houseList = [
      {
        type: 'Dog House',
        price: 5
      },
      {
        type: 'House',
        price: 10
      },
      {
        type: 'Apartment',
        price: 20
      }
    ];

    this.state = {
      coins: 0,
      showGame: false,
      showMenu: false,
      dogHousePurchaseDisabled: true,
      housePurchaseDisabled: true,
      apartmentPurchaseDisabled: true,
      unitList: new UnitList()
    }

    this.handleToggleGame = this.handleToggleGame.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleCoinClick = this.handleCoinClick.bind(this);
    this.subtractCoinCount = this.subtractCoinCount.bind(this);
    this.createDogHouse = this.createDogHouse.bind(this);
    this.createHouse = this.createHouse.bind(this);
    this.createApartment = this.createApartment.bind(this);
    this.addCoinCount = this.addCoinCount.bind(this);
  }

  handleCoinClick(e) {
    this.addCoinCount(1);
  }

  subtractCoinCount(amount){
    let decrementedCoin = this.state.coins - amount;
    this.updateCoinState(decrementedCoin);
  }

  addCoinCount(amount){
    let addedCoin = this.state.coins + amount;
    this.updateCoinState(addedCoin);
  }

  updateCoinState(amount) {
    this.setState({
      coins: amount,
      dogHousePurchaseDisabled: amount < this.houseList[0].price,
      housePurchaseDisabled: amount < this.houseList[1].price,
      apartmentPurchaseDisabled: amount < this.houseList[2].price
    });
  }

  // put logic in following three methods to create house on bottom of page
  createDogHouse() {
    this.state.unitList.append(new UnitStore('Dog House'));
    // console.log(this.state.unitList.state.unitList.length);
  }

  createHouse() {
    this.state.unitList.append(new UnitStore('House'));
  }

  createApartment() {
    this.state.unitList.append(new UnitStore('Apartment'));
  }

  handleToggleGame = () => {
    const showGame = !this.state.showGame;
    this.setState({showGame});
  }

  handleToggleMenu(e) {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div id="app" className="app">
        {this.state.showGame &&
          <div id="game" className="game">
            <div id="controls">
              <Popover id="popover" placement="top" isOpen={this.state.showMenu} target="MenuPopup" toggle={this.handleToggleMenu}>
                <PopoverHeader>Purchase Options</PopoverHeader>
                <PopoverBody>
                <Menu
                  houseList = {this.houseList}
                  dogHousePurchaseDisabled = {this.state.dogHousePurchaseDisabled}
                  housePurchaseDisabled = {this.state.housePurchaseDisabled}
                  apartmentPurchaseDisabled = {this.state.apartmentPurchaseDisabled}
                  createDogHouse={this.createDogHouse}
                  createHouse={this.createHouse}
                  createApartment={this.createApartment}
                  subtractCoinCount={this.subtractCoinCount}
                />
                </PopoverBody>
               </Popover>
              <Button color="info" id="MenuPopup" onClick={this.handleToggleMenu}>
                {this.state.showMenu ? 'Hide' : 'Splurge'}
              </Button>
              <Counter coins={this.state.coins} />
              <Character onClick={this.handleCoinClick} />
              <Property unitList={this.state.unitList} addCoin={this.addCoinCount}/>
            </div>
          </div>
        }
        <button className="btn" onClick={this.handleToggleGame}>
          {this.state.showGame ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
