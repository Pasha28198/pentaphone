import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

Example.propTypes = {}

export default Example
