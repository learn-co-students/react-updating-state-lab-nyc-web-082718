// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    const newBitrate = 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: newBitrate
      }
    })
  }

  changeResolution = () => {
    const newResolution = '720p'
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: newResolution
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className='bitrate'
        onClick={this.changeBitrate}>
        BITRATE
        </button>

        <button className='resolution'
        onClick={this.changeResolution}>
        RESOLUTION
        </button>
      </div>
    )
  }
}
