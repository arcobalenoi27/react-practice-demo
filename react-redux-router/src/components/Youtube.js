import React, { Component } from 'react'
import Search from '../containers/youtube/Search'
import Video from '../containers/youtube/Video'
import List from '../containers/youtube/List'

class Youtube extends Component {
  render() {
    return (
      <div>
        <h2>Youtube Search</h2>
        <Search />
        <Video />
        <List />
      </div>
    )
  }
}

export default Youtube;
