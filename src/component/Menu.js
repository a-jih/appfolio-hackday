import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button} from 'reactstrap';
import '../css/Menu.css'

class Menu extends Component {
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
      <table>
        <tbody>
        <tr>
          <th><img width="60" height="60" src={'../../assets/doghouse.svg'} /> </th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[0].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.dogHousePurchaseDisabled}
                      onClick={e => this.handleCreateDogHouseClick(e)}
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
          <th><img width="60" height="50" src={'../../assets/house.svg'} /></th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[1].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.housePurchaseDisabled}
                      onClick={e => this.handleCreateHouseClick(e)}
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
          <th><img width="60" height="55" src={'../../assets/apartment.svg'} /></th>
          <th>
            <table>
              <tbody>
                <tr><th>{this.props.houseList[2].type}</th></tr>
                <tr>
                  <th>
                    <Button
                      color="success"
                      disabled={this.props.apartmentPurchaseDisabled}
                      onClick={e => this.handleCreateApartmentClick(e)}
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
      <div className = "menu">
          { this.renderHousingOptions() }
      </div>
    )
  }
}

export default Menu;
