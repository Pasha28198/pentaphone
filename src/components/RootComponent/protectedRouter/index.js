import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import Auth from 'src/pages/RootPages/Auth/index'
import {connect} from 'react-redux'

function PrivateRouter ({auth, component: Component, ...rest}) {
	return <Route
		{...rest}
		component={auth ? Component : Auth}
	/>
}

PrivateRouter.propTypes = {
	auth: PropTypes.bool,
	component: PropTypes.func,
	rest: PropTypes.object,
	location: PropTypes.object
}

export default connect(
	state => ({auth: state.auth.authenticated}),
	null
)(PrivateRouter)
