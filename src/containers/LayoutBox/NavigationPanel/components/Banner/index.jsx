import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import user from 'assets/svg/User.png'
import banner from 'assets/images/bannerBack.jpg'
import logo from 'assets/svg/logo.svg'
import Rating from 'components/Chunks/Rating'
import Spinner from 'assets/svg/SpinnerUpload.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import './semantic.css'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class NavigationPanel extends Component {
	state = {imgLoad: false}
	componentWillReceiveProps ({data}) {
		if (data && 'photo' in data && data.photo !== null) {
			this.setState({imgLoad: true})
			const image = new Image()
			image.addEventListener('load', () => {
				this.setState({imgLoad: false})
			})
			image.src = data.photo
		}
	}
	render () {
		const {state: {imgLoad}, props: {auth, data, close: closeNav}} = this
		return (
			<div
				styleName='wrapperBanner'
			>
				<Link
					to={'/'}
					styleName='logoWrapperDesktop'>
					<h2>
						<img src={logo}/>
						<span>Re</span>
						Sell
					</h2>
				</Link>
				<Link
					onClick={closeNav}
					to={'/my-rating'}>
					<Choose>
						<When condition={(data && data.photo) || imgLoad}>
							<img src={imgLoad ? Spinner : data.photo} alt="user"/>
						</When>
						<Otherwise>
							<img src={user} alt="user"/>
						</Otherwise>
					</Choose>
				</Link>
				<div styleName="functionalPace">
					<If condition={!auth}>
						<span>
							<Link onClick={closeNav} to="/auth/login">Вход</Link>
							{` | `}
							<Link onClick={closeNav} to="/auth/registration">Регистрация</Link>
						</span>
					</If>
					<If condition={auth && data}>
						<div>
							<div styleName="wrapperUserInfo">
								<h1>
									<Choose>
										<When condition={data['first_name']}>
											{`${data['first_name']} ${data['last_name']}`}
										</When>
										<Otherwise>
											{data.email.split('@')[0]}
										</Otherwise>
									</Choose>
								</h1>
								<div styleName="wrapperRating">
									<Rating
										countRating={5}
										size={'big'}
									/>
								</div>
								<p>{data.email}</p>
							</div>
						</div>
					</If>
				</div>
				<img src={banner} alt="banner" styleName="banner"/>
			</div>
		)
	}
}

NavigationPanel.propTypes = {
	auth: PropTypes.bool,
	data: PropTypes.object,
	close: PropTypes.func
}

export default NavigationPanel
