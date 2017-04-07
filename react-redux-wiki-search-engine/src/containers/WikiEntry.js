import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'



const Wikientry = ({ entry, url}) => {
    
    console.log('title: ', entry.title);
    console.log('size: ', entry.size);
    console.log('wordcount: ', entry.wordcount);
    console.log('snippet: ', typeof $('<p></p>').html(entry.snippet)[0]);
    console.log('timestamp: ', entry.timestamp);
    console.log('wikipediaList: ', entry.wikipediaList);
    
    /*
                    dangerouslySetInnerHTML  is React's replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it's easy to inadvertently expose your users to a cross-site scripting (XSS) attack. 
                    //dangerouslySetInnerHTML 是React的一種語法, 可以讓string裡面的html標籤轉成真正的DOM元素, 不過這會有遭到XSS攻擊的危險
                    
   */
    return(
        <div className={`search-result-item `}>
                    <a href={url+ entry.title.replace(/ /g, "_")} className={`result-title`}>
                        {entry.title}
                    </a>

                    <div className={`result-link`}>
                        {

                            (entry.title.trim())?url.replace(/\/wiki\//g, ' ⇒ wiki ⇒ ') + entry.title: ''
                        }
                    <i className={`link-copy`}></i>
                    </div>
                    
                    
                    <main className={`wiki-entry-snippet`}  dangerouslySetInnerHTML={{__html:entry.snippet}}>
                        
                    </main>
                    
                    
                    <details className={`meta-data`} style={{display: (entry.title.trim())? 'block': 'none'}}>
                        {
                            `${(entry.size/1024).toFixed(1)} Kb - toatal:  ${entry.wordcount } words -  `
                        }
                        <time>
                            {
                            `${new Date(entry.timestamp)}`
                            }
                        </time>
                    </details>
                    
                    
                </div>
        )
}



export default Wikientry