import React, { Component } from 'react';
import './css/counter.css';

export default class Counter extends Component {
  render() {
    return(
      <div id="coin-counter" className="coin-counter">
        <h6 className="coin-font">{this.props.coins}</h6>
      </div>
    );
  }
}
