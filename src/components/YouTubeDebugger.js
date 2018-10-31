// Code YouTubeDebugger Component Here
import React, { Component } from 'react';


export default class YouTubeDebugger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, console.log(this.state.settings.bitrate))
  }

  handleResolution = () => {

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, console.log(this.state.settings.video));
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>resolution</button>
      </div>
    );
  }

}
