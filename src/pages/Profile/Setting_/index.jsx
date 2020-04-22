import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import EditProfileForm from 'containers/FormsBox/EditProfileForm'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Setting extends Component {
	state = {
		phone: '',
		verifyStatus: false,
		values: {},
		photo: null
	}

	savePhoto = photo => {
		this.setState({photo})
	}

	onSubmit = values => {
		const {
			userInfo: {phone},
			addPhone, sendSmd, department
		} = this.props

		if (!phone || phone.substring(3) !== values.phone) {
			addPhone(values.phone)
				.then(() => {
					window.scrollTo(0, 0)
					sendSmd()
					this.setState({
						values: {photo: this.state.photo, ...values},
						phone,
						verifyStatus: true
					})
				})
		} else {
			const value = {photo: this.state.photo, ...values}

			const data = value['shipment_department']
				? value
				: {'shipment_department': department, ...value}

			this.setState({phone: ''})
			this.props.onSubmit(data)
		}
	}

	verified = code =>
		this.props.verifyCode(code)
			.then(() => {
				const {props: {department, onSubmit}, state: {values}} = this

				const data = values['shipment_department']
					? values
					: {'shipment_department': department, ...values}

				this.setState({phone: ''})
				onSubmit(data)
			})

	componentWillMount () {
		const {userInfo, pushToProfile} = this.props
		!userInfo.pk && pushToProfile()
	}

	componentWillUnmount () {
		const {state: {phone}, props: {addPhone}} = this
		phone && addPhone(phone)
	}
	render () {
		const {
			state: {verifyStatus, photo},
			props: {pushToProfile, sendSmd},
			onSubmit, verified, savePhoto
		} = this

		return (
			<div>
				<EditProfileForm
					resend={sendSmd}
					closeVerify={() => this.setState({verifyStatus: false})}
					photo={photo}
					savePhoto={savePhoto}
					verifyStatus={verifyStatus}
					pushToProfile ={pushToProfile}
					verifyCode={verified}
					onSubmit={onSubmit}
					context={this}
				/>
			</div>
		)
	}
}

Setting.propTypes = {
	userInfo: PropTypes.obj,
	pushToProfile: PropTypes.func,
	verifyCode: PropTypes.func,
	addPhone: PropTypes.func,
	sendSmd: PropTypes.func,
	onSubmit: PropTypes.func,
	department: PropTypes.string
}

export default Setting
