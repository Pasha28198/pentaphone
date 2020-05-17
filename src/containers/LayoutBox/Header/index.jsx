import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

// import burger from 'assets/svg/burge.svg'
// import { chooseTitle as choose } from 'utills/configs/header'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux'
import HeaderSearch from './headerSearch'
import HeaderBar from './headerBar'
import { Link } from 'react-router-dom'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Header extends Component {
	constructor (props) {
		super(props)
		this.state = {
			icon: false
		}
		this.toggleCategoryList = this.toggleCategoryList.bind(this)
	}
	toggleCategoryList () {
		this.setState({icon: !this.state.icon})
	}
	render () {
		const { currentLocation } = this.props
		return (
			<header styleName="site-header">
				<div styleName="top-bar">
					<div styleName="container">
						<div className="row align-items-center  justify-content-between">
							<div className="col-sm">
								<div className="row">
									<div className="col-auto">
										<div styleName="header_socials">
											<a href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitter}/> </a>
											<a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /> </a>
											<a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebookF} /> </a>
										</div>
									</div>
									<div className="col">
										<div styleName="hot-title"><h5>Now shipping to Canada.</h5></div>
									</div>
								</div>
							</div>
							<div className="col-sm">
								<ul styleName="list" >
									<li><Link to='/'>Home</Link></li>
									<li><Link to=''>Blog</Link></li>
									<li><Link to=''>Ciming Soon</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<HeaderSearch />
				<HeaderBar
					location={currentLocation}
					toggleList={this.toggleCategoryList}
					icon={this.state.icon}
				/>
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
