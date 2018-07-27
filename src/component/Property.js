import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/property.css';

import House  from './House';
import UnitList from '../stores/UnitList';
import UnitStore from '../stores/UnitStore';

export default class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [new UnitStore(), new UnitStore()]
    };
  }

  static propTypes = {
    unitList: PropTypes.instanceOf(UnitList),
    addCoin: PropTypes.func
  }

  componentDidMount() {
    this.setState({ houses: this.props.unitList.unitList });
  }

  render() {
    return (
      <div className="property">
        {this.state.houses.map((d, i) =>
          <House
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
