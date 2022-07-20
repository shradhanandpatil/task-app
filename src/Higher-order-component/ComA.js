import React, { Component } from 'react'
import Add from './Hoc';

class ComA extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.hclike}>shradhanand</button><span>{this.props.hcount}</span>
      </div>
    )
  }
}

export default Add(ComA);
