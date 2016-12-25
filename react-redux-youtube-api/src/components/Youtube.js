import React, { Component } from 'react'
import Search from '../containers/Search'
import Video from '../containers/Video'
import List from '../containers/List'

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
