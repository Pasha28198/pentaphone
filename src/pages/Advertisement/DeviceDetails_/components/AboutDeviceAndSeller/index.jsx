import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class AboutDeviceAndSeller extends Component {
	render () {
		const { description } = this.props
		if (!description) {
			return (<div></div>)
		}
		return (
			<div styleName="AboutDeviceAndSeller">
				<h2>Описание от продавца: </h2>
				<p>
					{description}
				</p>
			</div>
		)
	}
}

AboutDeviceAndSeller.propTypes = {
	description: PropTypes.string
}

export default AboutDeviceAndSeller
