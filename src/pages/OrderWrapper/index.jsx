import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// local components
import Order from 'containers/AdvertisementBox/buyFlow/Order'
import LoginForm from 'containers/FormsBox/LogIn'

// decorator modules
import {mapStateToProps, onSubmitLogIn} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, {onSubmitLogIn})
@CSSModules(styles)

class OrderWrapper extends Component {
	state={itemId: null}

	// save id of item to fetch data after auth and re-render
	componentDidMount () { this.setState({itemId: this.props.id}) }

	render () {
		const {parentProps, onSubmitLogIn, auth} = this.props
		const {itemId} = this.state
		const menu = {secondary: true, pointing: true}

		// init tabs for unauth user
		const panes = [
			{
				menuItem: 'Новый пользователь',
				render: () => <Order {...{parentProps, itemId}}/>
			},
			{
				menuItem: 'Вход в систему',
				render: () => <LoginForm onSubmit={onSubmitLogIn}/>
			}
		]
		return (
			<div>
				<Choose>
					<When condition={auth}>
						<Order {...{parentProps, itemId}}/>
					</When>
					<Otherwise>
						<Tab {...{panes, menu}}/>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}

OrderWrapper.propTypes = {
	parentProps: PropTypes.object,
	onSubmitLogIn: PropTypes.func,
	auth: PropTypes.bool,
	id: PropTypes.string
}

export default OrderWrapper
