import React, { Component } from 'react'
import Add from './Hoc'

class ComB extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.hclike}>vicky</button><span>{this.props.hcount}</span>
      </>
    )
  }
}

export default Add(ComB);
