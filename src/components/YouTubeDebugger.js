import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

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
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <main>
        <button className='bitrate' onClick={this.changeBitrate}>Change Bitrate</button>
        <button className='resolution' onClick={this.changeResolution}>Change Resolution</button>
      </main>
    )
  }
}
