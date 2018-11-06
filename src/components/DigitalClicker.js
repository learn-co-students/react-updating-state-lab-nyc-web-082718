// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  } //end of constructor

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  } //end of handleClick

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }


} //end of class
export default DigitalClicker
