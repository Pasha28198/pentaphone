import {
	loginUser,
	expressRegistr,
	pushDraft,
	sendUserInfo,
	getUserInfo
	// registerUser,
	// facebookAuth
} from 'actions'

import { SubmissionError } from 'redux-form'
import {push} from 'react-router-redux'

export const mapStateToProps = (state) => ({
	infoForSell: state.sellFlow.deviceInfoForSell,
	version: state.sellFlow.versions[0] && state.sellFlow.versions[0].pk,
	auth: state.auth.authenticated
})

export const mapActionsToProps = dispatch => ({
	pushTo (path) { dispatch(push(`/buyout/${path}`)) },
	pushInfo (infoForSell, version) {
		const data = {
			'device': infoForSell.find((item) => item.key === 'model').pk,
			'brand': infoForSell.find((item) => item.key === 'brands').pk,
			'name': infoForSell.find((item) => item.key === 'brands').name,
			'condition': infoForSell.find((item) => item.key === 'condition').pk,
			'visual_condition': infoForSell.find((item) => item.key === 'visual_condition').pk,
			'accessories': infoForSell.filter(item => item.key === 'accessories').map(item => item.pk),
			version
		}
		dispatch(pushDraft(data))
		dispatch(push('/buyout/accept-request'))
	},
	sendUserInfo ({name, email, phone, city, adress}) {
		const data = new FormData()
		data.append('phone', '+38' + phone)
		data.append('email', email)
		data.append('first_name', name)
		data.append('city', city)
		data.append('adress', adress)

		return dispatch(sendUserInfo(data))
	},
	expressRegistartion (mail) { return dispatch(expressRegistr(mail)) },
	onSubmitLogIn ({email, password}) {
		return dispatch(loginUser(email, password))
			.then((res) => res)
			.catch(({response: {data}}) => {
				if ('email' in data) {
					throw new SubmissionError({email: data.email[0]})
				} else if ('non_field_errors' in data) {
					sessionStorage.setItem('resetPassword', email)
					throw new SubmissionError({password: data['non_field_errors'][0]})
				} else if ('password' in data) {
					throw new SubmissionError({password: data['password'][0]})
				}
			})
	},
	getUserInfo () {
		dispatch(getUserInfo())
	}
})
