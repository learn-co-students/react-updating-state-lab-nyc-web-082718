// Code DigitalClicker Component Here
import React from 'react'

 export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    const newValue = this.state.timesClicked + 1
    this.setState({
      timesClicked: newValue
    })
  }

  render() {
    return(
      <button onClick={this.increment}>
      {this.state.timesClicked}
      </button>
    )
  }
}
