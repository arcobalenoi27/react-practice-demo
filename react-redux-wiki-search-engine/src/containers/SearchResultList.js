import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Wikientry from './WikiEntry'
import NotFoundResult from './NotFoundResult'


class SearchResultList extends Component {
    constructor(props) {
        super(props)
        var {url, wikipediaLanguage, wikipediaList, active} =  this.props;
        this.state = {
            wikipediaList: this.props.wikipediaList, 
            url:url, 
            active: active,
            first: true
            };
    }
    render() {

        const { props : { wikipediaList, url, active, wikipediaLanguage } } = this;
        console.group();
        console.info('active: ', active);
        console.info('url: ', url);
        console.groupEnd();
        
        if(active.length　== 0) {
            return (
                <NotFoundResult />    
            )
        } else if(active.length > 0){
            
            return (
                    <section className={`search-result-list`}>
                    {

                        active.map((entry) =>  {
                            console.info('entry', entry.title)
                            return(
                              <Wikientry  
                                url={url}
                                entry={entry}

                                 />
                                )
                        }

                    )}
                    </section>

            )
        }
        
        return (
            <div style={{opacity: '0'}}></div>
        )
        
    }
}



export default connect( (state, ownProps) => {
    var active = (state.wikipediaList.entry !== undefined && state.wikipediaList['entry'][`${state.wikipediaLanguage}`] !== undefined)
            ? state.wikipediaList['entry'][`${state.wikipediaLanguage}`]: [
                {
                    title: '  ',
                    size: ' ',
                    wordcount: '  ',
                    snippet: '  ',
                    timestamp: ' '
                }
            ];
    switch (state.wikipediaLanguage) {
        case 'en':
            return (state.wikipediaList !== undefined ) ? {wikipediaList: state.wikipediaList, url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`, wikipediaLanguage: state.wikipediaLanguage, active} : {wikipediaList: [], url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`,  wikipediaLanguage: state.wikipediaLanguage, active};
        case 'ja':
            return (state.wikipediaList !== undefined) ?{wikipediaList: state.wikipediaList, url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`, wikipediaLanguage: state.wikipediaLanguage, active} : {wikipediaList: [], url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`, wikipediaLanguage: state.wikipediaLanguage, active};
        case 'zh':
            return (state.wikipediaList !== undefined) ? {wikipediaList: state.wikipediaList, url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`, wikipediaLanguage: state.wikipediaLanguage, active} : {wikipediaList: [], url: `https://${state.wikipediaLanguage}.wikipedia.org/wiki/`, wikipediaLanguage: state.wikipediaLanguage, active};
        default:
            return console.error('unexpected wikiLanguage: ', state.wikipediaList);
    }
    
})(SearchResultList)