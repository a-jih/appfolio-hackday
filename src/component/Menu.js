import React, { Component } from 'react';
import {Button} from 'reactstrap';
import '../css/Menu.css'

class Menu extends Component {
  handleCreateDogHouseClick = () => {
    this.props.subtractCoinCount(this.props.houseList[0].price);
    this.props.createDogHouse();
  }

  handleCreateHouseClick = () => {
    this.props.subtractCoinCount(this.props.houseList[1].price);
    this.props.createHouse();
  }

  handleCreateApartmentClick = () => {
    this.props.subtractCoinCount(this.props.houseList[2].price);
    this.props.createApartment();
  }

  renderHousingOptions(){
    return (
      <table>
        <tbody>
        <tr>
          <th><img width="60" height="60" src={'../../assets/doghouse.svg'} alt="Dog House" /> </th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[0].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.dogHousePurchaseDisabled}
                      onClick={this.handleCreateDogHouseClick}
                    >
                      {this.props.houseList[0].price} coins
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </th>
        </tr>
        <tr>
          <th><img width="60" height="50" src={'../../assets/house.svg'} alt="House" /></th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[1].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.housePurchaseDisabled}
                      onClick={this.handleCreateHouseClick}
                    >
                      {this.props.houseList[1].price} coins
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </th>
        </tr>
        <tr>
          <th><img width="60" height="55" src={'../../assets/apartment.svg'} alt="Apartment" /></th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[2].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.apartmentPurchaseDisabled}
                      onClick={this.handleCreateApartmentClick}
                    >
                      {this.props.houseList[2].price} coins
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </th>
        </tr>
      </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="menu">
          { this.renderHousingOptions() }
      </div>
    )
  }
}

export default Menu;
