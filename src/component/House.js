import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UnitStore from '../stores/UnitStore';

export default class House extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.delHouse = this.props.delHouse.bind(this);
  }

  static propTypes = {
    store: PropTypes.instanceOf(UnitStore),
    addCoin: PropTypes.func,
    delHouse: PropTypes.func,
    id: PropTypes.number
  }

  handleClick() {
    this.props.addCoin(this.props.store.price);
    this.props.delHouse(this.props.id);
  }

  render () {
    return (
      <div id={this.props.id}>
        <img onClick={this.handleClick} src={this.props.store.photoUrl} alt='wrong url' />
      </div>
    );
  }
}


