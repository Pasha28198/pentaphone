import React, {Component} from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import styles from './styles.scss'
import {mapActionsToProps, mapStateToProps} from './redux'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class VerifyEmail extends Component {
	componentWillMount () {
		const {
			verify,
			parentProps: {
				match: {params: {token}}
			}
		} = this.props

		verify({key: token})
	}

	render () {
		return <div styleName='wrapperVerifyEmail'>
			<Helmet>
				<title>{this.props.titleHelmet}</title>
			</Helmet>
			Email confirm
		</div>
	}
}

VerifyEmail.propTypes = {
	verify: PropTypes.func,
	match: PropTypes.object,
	titleHelmet: PropTypes.string,
	parentProps: PropTypes.object
}

export default VerifyEmail
