import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '../redux/actions/index'
import LanguagesList from './LanguagesList'
var FontAwesome = require('react-fontawesome');
import $ from 'jquery'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '', active: 'en' };
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._doSearch = this._doSearch.bind(this);
         
    }
    
    
    
    _handleKeyPress(e)  {
        if(e.key == 'Enter') {
            //do Search
            $('.search-container').css({transform: 'translateY(0%)'});
            $('.search-container').animate({top: '0vh'}, 800);
            $('.search-result-item:last-of-type').css({opacity: '1'});
            this.props.onSearch(e.target.value);
        } else {
            this.setState({term: e.target.value});
        }
    }
        
    _doSearch(e)  {
        //do Search
        e.preventDefault();
        $('.search-container').css({transform: 'translateY(0%)'});
        $('.search-container').animate({top: '0vh'}, 800);
        $('.search-result-item:last-of-type').css({opacity: '1'});
        this.props.onSearch($('.keyword').val());
    }
    
    render() {
        $('.search-result-item').css({opacity: '0'});
        return (
            <div className="search-container ">
                <div className={`feature-bar`}>
                    <h1 className={`search-heading`}>
                        Wiki Search Engine
                    </h1>
                    <input type="text" className={`keyword`} placeholder="Enter something..." onKeyPress={ this._handleKeyPress} />
                    <div className={`btn-set`}>
                        <a href="#" className={`search-btn btn`} onClick={
                        this._doSearch}>
                            <FontAwesome className="fa fa-search"   />
                            
                        </a>
                        <a href="http://en.wikipedia.org/wiki/Special:Random" className={`random-btn btn`} target="_blank">
                            <i className={`fa fa-random`}></i>
                        </a>
                    </div>
            
                    <LanguagesList />
                </div>
            </div>
        )
    }
}

//search.bind(null, term) 只傳第1個參數
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onSearch: (term) =>
            dispatch(search.bind(null, term))
    };
}


export default connect(null, mapDispatchToProps)(SearchBar)