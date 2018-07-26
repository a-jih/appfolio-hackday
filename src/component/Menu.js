import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';
import '../css/Menu.css'

class Menu extends Component {
  constructor(props){
    super(props)
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
      coins: this.props.coins,
      dogHousePurchaseDisabled: this.props.coins < this.houseList[0].price,
      housePurchaseDisabled: this.props.coins < this.houseList[1].price,
      apartmentPurchaseDisabled: this.props.coins < this.houseList[2].price,
    }
  }

  handleCreateDogHouseClick(e){
    this.props.subtractCoinCount(this.houseList[0].price);
    this.props.createDogHouse();
  }

  handleCreateHouseClick(e){
    this.props.subtractCoinCount(this.houseList[1].price);
    this.props.createHouse();
  }

  handleCreateApartmentClick(e){
    this.props.subtractCoinCount(this.houseList[2].price);
    this.props.createApartment();
  }

  renderHousingOptions(){
    if (this.state.coins != this.props.coins){
      this.setState({
        coins: this.props.coins,
        dogHousePurchaseDisabled: this.props.coins < this.houseList[0].price,
        housePurchaseDisabled: this.props.coins < this.houseList[1].price,
        apartmentPurchaseDisabled: this.props.coins < this.houseList[2].price,
      });
    }
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Purchase Options</CardTitle>
              <ul className="OptionList">
                <li>{this.houseList[0].type}
                  <button
                    disabled={this.state.dogHousePurchaseDisabled}
                    onClick={e => this.handleCreateDogHouseClick(e)}
                  >
                    {this.houseList[0].price} coins
                  </button>
                </li>
                <li>{this.houseList[1].type}
                  <button
                    disabled={this.state.housePurchaseDisabled}
                    onClick={e => this.handleCreateHouseClick(e)}
                  >
                    {this.houseList[1].price} coins
                  </button>
                </li>
                <li>{this.houseList[2].type}
                  <button
                    disabled={this.state.apartmentPurchaseDisabled}
                    onClick={e => this.handleCreateApartmentClick(e)}
                  >
                    {this.houseList[2].price} coins
                  </button>
                </li>
              </ul>
          </CardBody>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div className = "menu">
          { this.renderHousingOptions() }
      </div>
    )
  }
}

export default Menu;
