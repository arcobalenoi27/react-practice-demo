import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../redux/actions/index'

const LanguageItem = ({active, children, onSetLanguage, lang}) => {
    
    if(active) {
        return (
            <li className={`lang active`} lang={lang} > 
                {children}
                </li>
        )
    } 
    
    return (
            <li className={`lang`} lang={lang} onClick={ (e) => {
                e.preventDefault()
                onSetLanguage()
            }}>
                {children}
            </li>
        )
}
    
LanguageItem.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onSetLanguage: PropTypes.func.isRequired
}


export default connect( (state, ownProps) => ({
    active: state.wikipediaLanguage === ownProps.lang
}), (dispatch, ownProps) => {
    return {
        onSetLanguage: () => {
            dispatch(setLanguage(ownProps.lang) )
        }
    }
} )(LanguageItem)
