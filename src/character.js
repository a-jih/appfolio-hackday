import React, { Component } from 'react';

export default class Character extends Component {
  render() {
    return(
      <button onClick={e => this.props.onClick(e)}>{'I am a character'}</button>
    );
  }
}