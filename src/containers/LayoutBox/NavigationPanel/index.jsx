import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Banner from './components/Banner/index'
import Nav from './components/Nav/index'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class NavigationPanel extends Component {
	componentDidMount () {
		const {data, getUserInformation, auth} = this.props
		const {length} = Object.keys(data)
		length < 3 && auth && getUserInformation()
	}

	shouldComponentUpdate ({navState}) {
		if (navState) {
			document.body.style.overflow = 'hidden'
			document.body.style.position = 'fixed'
			document.body.style.width = '100vw'
		} else {
			document.body.style = ''
		}
		return true
	}

	render () {
		const {navState, closeNav, data} = this.props

		return (
			<div>
				<div styleName={navState ? 'background backActive' : 'background'}></div>
				<div
					ref={ nav => { this.nav = nav } }
					styleName={navState ? 'outsideWrapperDisable outsideWrapperActive' : 'outsideWrapperDisable'}
				>
					<div styleName="ClosePace" onClick={closeNav}>
					</div>
					<div
						styleName={
							navState
								? 'navigationWrapperOpen'
								: 'navigationWrapperOpen navigationWrapperClose'
						}
					>
						<Banner
							data={ data['is_active'] ? data : null}
							close={closeNav}
						/>
						<Nav
							close={closeNav}
						/>
					</div>
				</div>
			</div>
		)
	}
}

NavigationPanel.propTypes = {
	navState: PropTypes.bool,
	closeNav: PropTypes.func,
	getUserInformation: PropTypes.func,
	data: PropTypes.object,
	auth: PropTypes.bool
}

export default NavigationPanel
