import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return(
      <div>
        {this.props.coins}
      </div>
    );
  }
}