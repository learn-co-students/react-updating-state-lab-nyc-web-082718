// Code YouTubeDebugger Component Here
import React, {Component} from 'react';
export default class YouTubeDebugger extends Component{
  constructor(){
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
  handelClick =()=> {

    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      },
    }, ()=> console.log(this.state));
  }
  reso = ()=>{

    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      }
    }, ()=>console.log(this.state))

  }
  render(){
    return(
      <div>
      <button className="bitrate" onClick={this.handelClick}>{this.state.settings.bitrate}</button>

      <button className= "resolution"onClick={this.reso}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
