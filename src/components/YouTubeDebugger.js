// Code YouTubeDebugger Component Here
// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video:
        { resolution: '1080p' }
      }
    }
  }

  handleBitrateClick = (e) => {
    const newSettings = {...this.state.settings}
    newSettings.bitrate = 12
    this.setState({
      settings: newSettings
    })
  }

  handleResolutionClick = (e) => {
    const newSettings = {...this.state.settings}
    newSettings.video.resolution = '720p'
    this.setState({
      settings: newSettings
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
      </div>
    )
  }
}
