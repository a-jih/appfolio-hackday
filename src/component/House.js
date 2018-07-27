import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

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

  handleClick(e) {
    e.preventDefault();
    this.props.addCoin(this.props.store.price);
    this.props.delHouse(this.props.id);
  }

  render () {
    return (
      <Draggable
        axis="x"
        defaultPosition={{x: -this.props.store.position, y: 0}}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <svg
          id={this.props.id}
          className="house"
          onContextMenu={this.handleClick}
          width={this.props.store.width}
          height={this.props.store.height}
        >
          <image xlinkHref={this.props.store.photoUrl} width={this.props.store.width} height={this.props.store.height} />
        </svg>
      </Draggable>
    );
  }
}


