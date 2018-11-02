// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

//   handleChangeBitrate = () => {
//   this.setState({
//     settings: Object.assign({}, this.state.settings, {
//       bitrate: 12
//     }),
//   });
// }
//
// handleChangeResolution = () => {
//   this.setState({
//     settings: Object.assign({}, this.state.settings, {
//       video: Object.assign({}, this.state.settings.video, {
//         resolution: '720p'
//       })
//     }),
//   });

  render() {
    console.log(this.state.settings)
    return(
      <div>
      <button className="bitrate" onClick={this.handleBitrate}> Bitrate</button>
      <button className="resolution" onClick={this.handleResolution}> Reso</button>
      </div>
    )
  }
};
