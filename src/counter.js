import React, { Component } from 'react';
import './css/counter.css';

export default class Counter extends Component {
  render() {
    return(
      <div id="coin-counter" className="coin-counter">
        {this.props.coins}
      </div>
    );
  }
}