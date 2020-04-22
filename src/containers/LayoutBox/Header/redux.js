import {
	ACTIVE_NAVIGATION
} from 'actions/types'

import {push} from 'react-router-redux'

export const mapStateToProps = ({routing}) => ({
	currentLocation: routing.location.pathname.split('/')[1]
})

export const mapActionsToProps = (dispatch) => ({
	openNav () { dispatch({type: ACTIVE_NAVIGATION}) },
	pushToHome () { dispatch(push('/')) }
})
