import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Dragaable from 'react-draggable';

import  House  from './House';
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
      <Row fluid>
        {this.state.houses.map((d, i) =>
          <Col lg="4">
            <Dragaable
              axis="x"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null}
              grid={[25, 25]}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div><House className="movable-house" store={d} id={i} addCoin={this.props.addCoin} delHouse={this.props.unitList.remove}/></div>
            </Dragaable>
          </Col>)}
      </Row>
    );
  }
}
