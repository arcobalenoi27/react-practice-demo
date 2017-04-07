import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import SearchResultList from '../containers/SearchResultList'

class WikipediaSearch extends Component {
    render() {
        return (
            <div className={`container`}>
                <SearchBar />
                <div className={`content`}>
                    <SearchResultList />
                </div>
            </div> 
        )
    }
}

export default WikipediaSearch;