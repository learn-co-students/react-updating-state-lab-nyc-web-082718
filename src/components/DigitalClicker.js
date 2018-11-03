// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    const newState = ++this.state.timesClicked
    this.setState({
      timesClicked: newState
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
} //end of class
