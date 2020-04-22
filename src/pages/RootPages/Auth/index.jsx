import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Tab, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import styles from './styles.scss'
import {mapStateToProps, onSubmitRegistration, onSubmitLogIn, pushTo, pushToRoute} from './redux.js'
import LoginForm from 'containers/FormsBox/LogIn'
import Registration from 'containers/FormsBox/Registration'
import {faceBookDev, faceBookProd, googleDev, googleProd} from 'utills/socialAuth.js'
import {parseHash} from 'utills/dateParser'

@connect(mapStateToProps, {onSubmitRegistration, onSubmitLogIn, pushTo, pushToRoute})
@CSSModules(styles, {allowMultiple: true})

class Auth extends Component {
	state = {
		redirectToken: '',
		errors: ''
	}
	onTabChange = (e, {activeIndex}) => {
		this.setState({errors: ''})
		const {pathname} = window.location
		if (pathname !== '/order/100/contact-info' &&
            pathname !== 'order/300/contact-info') {
			this.props.pushToRoute(activeIndex ? '/auth/registration' : '/auth/login')
		} else this.setState({activeIndex})
	}

	componentWillReceiveProps ({parentProps}) {
		if (parentProps) {
			const {match} = parentProps
			const {formType} = match.params
			const {params} = this.props.parentProps.match
			const activeIndex = (formType === 'registration') ? 1 : 0
			formType !== params.formType && this.setState({formType, activeIndex})
		}
	}

	componentWillMount () {
		const {hash, pathname} = window.location
		if (hash) {
			this.props.pushTo(parseHash(hash), pathname.split('/')[3])
				.catch(({response: {data}}) => {
					if ('non_field_errors' in data) {
						this.setState({errors: 'Пользователь с данной почтой уже существует'})
					}
				})
		}
		if (!this.props.auth) {
			const activeIndex = (pathname.split('/')[2] === 'registration') ? 1 : 0
			this.setState({activeIndex})
		}
	}

	render () {
		const {
			state: {activeIndex, errors}, onTabChange,
			props: {onSubmitLogIn, onSubmitRegistration, id}
		} = this
		const {pathname, host} = window.location
		const menu = {secondary: true, pointing: true}
		const panes = [
			{
				menuItem: 'Вход в систему',
				render: () =>
					<LoginForm
						err={errors}
						onSubmit={onSubmitLogIn}
						onChange={() => { this.setState({errors: ''}) }}
					/>
			},
			{
				menuItem: 'Регистрация',
				render: () => <Registration onSubmit={onSubmitRegistration}/>
			}
		]
		const facebook = host === 'resell.com.ua' ? faceBookProd : faceBookDev
		const google = host === 'resell.com.ua' ? googleProd : googleDev
		return (
			<div styleName={ pathname === '/my-rating' && !id ? 'Auth abs' : 'Auth'}>
				<Helmet>
					<title>Регистрация на сайте resell.com.ua</title>
					<link rel="canonical" href={`https://resell.com.ua/reset-password`} />
				</Helmet>
				<section>
					<Tab {...{panes, onTabChange, activeIndex, menu}}/>
				</section>
				<h2 styleName="labelInWith">Войти через</h2>
				<div styleName="wrapperSignInWith">
					<Button
						color='facebook'
						onClick={() => { window.location.href = facebook }}
					>
						Facebook
					</Button>
					<Button
						onClick = { () => { window.location.href = google }}
						color='google plus'
					>
						Google
					</Button>
				</div>
			</div>
		)
	}
}

Auth.propTypes = {
	onSubmitLogIn: PropTypes.func,
	onSubmitRegistration: PropTypes.func,
	parentProps: PropTypes.object,
	id: PropTypes.string,
	pushTo: PropTypes.func,
	pushToRoute: PropTypes.func,
	auth: PropTypes.func
}

export default Auth
