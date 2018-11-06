// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }; //end of state
  } //end of constructor

  handleClickBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state.settings.bitrate))
  } //end of click

  handleChangeResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,

      video: {
        ...this.state.settings.video,
        resolution: '720p'
      }
    }
  }, () => console.log(this.state.settings.video.resolution))
}

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleChangeResolution}>Change Resolution</button>
      </div>
    )
  }//end of render function


} //end of class
export default YouTubeDebugger;
