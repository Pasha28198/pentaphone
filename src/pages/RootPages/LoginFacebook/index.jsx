import React, {Component} from 'react'
// import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
// import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
// @CSSModules(styles)

class Example extends Component {
	componentWillMount () {
		const {location} = this.props
		this.props.facebook({
			'access_token': location.hash.split('&')[0].split('=')[1],
			'code': location.hash.split('&')[2].split('=')[1]
		})
	}
	render () {
		return (
			<div></div>
		)
	}
}

Example.propTypes = {
	facebook: PropTypes.func,
	location: PropTypes.object
}

export default Example
