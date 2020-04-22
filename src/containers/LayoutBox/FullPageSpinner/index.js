import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropsTypes from 'prop-types'
import {connect} from 'react-redux'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux'
import Spinner from 'components/Chunks/Spinner'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class FullPageSpinner extends Component {
	render () {
		const {active} = this.props
		if (active) {
			return (
				<div styleName="FullPageSpinner">
					<Spinner/>
				</div>
			)
		} else {
			return ''
		}
	}
}

FullPageSpinner.propTypes = {
	active: PropsTypes.bool
}

export default FullPageSpinner
