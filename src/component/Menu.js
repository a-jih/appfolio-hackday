import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';
import '../css/Menu.css'

class Menu extends Component {
  constructor(props){
    super(props)
  }

  handleCreateDogHouseClick(e){
    this.props.subtractCoinCount(this.props.houseList[0].price);
    this.props.createDogHouse();
  }

  handleCreateHouseClick(e){
    this.props.subtractCoinCount(this.props.houseList[1].price);
    this.props.createHouse();
  }

  handleCreateApartmentClick(e){
    this.props.subtractCoinCount(this.props.houseList[2].price);
    this.props.createApartment();
  }

  renderHousingOptions(){
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Purchase Options</CardTitle>
              <ul className="OptionList">
                <li>{this.props.houseList[0].type}
                  <button
                    disabled={this.props.dogHousePurchaseDisabled}
                    onClick={e => this.handleCreateDogHouseClick(e)}
                  >
                    {this.props.houseList[0].price} coins
                  </button>
                </li>
                <li>{this.props.houseList[1].type}
                  <button
                    disabled={this.props.housePurchaseDisabled}
                    onClick={e => this.handleCreateHouseClick(e)}
                  >
                    {this.props.houseList[1].price} coins
                  </button>
                </li>
                <li>{this.props.houseList[2].type}
                  <button
                    disabled={this.props.apartmentPurchaseDisabled}
                    onClick={e => this.handleCreateApartmentClick(e)}
                  >
                    {this.props.houseList[2].price} coins
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
