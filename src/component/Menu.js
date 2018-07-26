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
  }

  renderHousingOptions(){
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Purchase Options</CardTitle>
              <ul className="OptionList">
                <li>{this.houseList[0].type}
                  <button
                  >
                    {this.houseList[0].price} coins
                  </button>
                </li>
                <li>{this.houseList[1].type}
                  <button
                  >
                    {this.houseList[1].price} coins
                  </button>
                </li>
                <li>{this.houseList[2].type}
                  <button
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
