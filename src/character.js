import React, { Component } from 'react';
import './css/character.css';

export default class Character extends Component {
  render() {
    return(
      <button
        id="character"
        className="character"
        onClick={this.props.onClick}
      >
        <img src="/assets/doghouse.svg" alt="Character" />
      </button>
    );
  }
}