import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVideo } from '../redux/actions/index'

const ListItem = ({video, setVideo}) => {
  const { id: { videoId } } = video;
  const {snippet : { title, description, thumbnails: { default: {url} }} } = video;
  const onVideo = (e) => {
    e.preventDefault();
    setVideo(video);
    window.scrollTo(0,0);
  }
  return (
    <a href="#" onClick={ onVideo }>
      <h2>{title}</h2>
      <div>{description}</div>
      <img src={url} />
    </a>
  )
}

export default connect( null, {
    setVideo
  } )(ListItem)
