import {formValueSelector} from 'redux-form'
import {goBack} from 'react-router-redux'

export const mapStateToProps = (state) => {
	const initialValues = {
		city: state.mvpInfo.city,
		adress: state.mvpInfo.adress
	}

	return {
		city: formValueSelector('newBuyer')(state, 'city'),
		adress: formValueSelector('newBuyer')(state, 'adress'),
		initialValues
	}
}

export const mapActionsToProps = (dispatch) => ({
	goBack () { dispatch(goBack()) }
})
