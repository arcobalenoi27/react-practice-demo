import React, { Component } from 'react'
import { connect } from 'react-redux'

class Video extends Component {
  render() {
    const {props: {video}} = this;
    if(!video) {
      return <div></div>
    }
    const {id: {videoId}} = video;
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <iframe width="1280" height="720"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
            webkitallowfullscreen="webkitallowfullscreen" >
        </iframe>
      </div>
    )
  }
}

export default connect( (state, ownProps) => {
  return ({ video: state.youtube.video })
}, null
)(Video)
