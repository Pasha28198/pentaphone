import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'

import burger from 'assets/svg/burge.svg'
import { chooseTitle as choose } from 'utills/configs/header'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Header extends Component {
	render () {
		const { openNav, currentLocation, pushToHome } = this.props
		return (
			<header styleName="wrapperHeader">
				<div
					styleName="logoWrapper"
				>
					<img
						styleName="arrow"
						src={burger}
						alt="arrow"
						onClick={openNav}
					/>
					<If condition={!choose(currentLocation)}>
						<h2
							onClick={pushToHome}
							styleName="lable"
						>Re<span>Sell</span></h2>
					</If>
					<h3>{choose(currentLocation)}</h3>
				</div>
			</header>
		)
	}
}

Header.propTypes = {
	openNav: PropTypes.func,
	currentLocation: PropTypes.string,
	pushToHome: PropTypes.func
}

export default Header
