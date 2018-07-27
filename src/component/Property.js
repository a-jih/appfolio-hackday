import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/property.css';

import House  from './House';
import UnitList from '../stores/UnitList';


export default class Property extends Component {
  static propTypes = {
    unitList: PropTypes.instanceOf(UnitList),
    addCoin: PropTypes.func
  }

  render() {
    return (
      <div className="property">
        {this.props.unitList.unitList.map((d, i) =>
          <House
            className="house"
            store={d}
            id={i}
            addCoin={this.props.addCoin}
            delHouse={this.props.unitList.remove}
          />)
        }
      </div>
    );
  }
}
