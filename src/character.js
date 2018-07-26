import React, { Component } from 'react';
import './css/character.css';

export default class Character extends Component {
  render() {
    return(
      <button
        id="character"
        className="character"
        onClick={e => this.props.onClick(e)}
      >
        {'I am a character'}
      </button>
    );
  }
}