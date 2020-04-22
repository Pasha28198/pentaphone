export const mapStateToProps = ({
	auth,
	profile: {userInfo: {
		phone,
		first_name: f,
		last_name: l,
		middle_name: m
	}}
}) => {
	const data = JSON.parse(localStorage.getItem('unregistrUserInfo'))
	let initialValues

	// init default values for unregistered user
	if (!auth.authenticated && data) {
		initialValues = {
			contactOrderInfo: {
				first_name: data.name,
				last_name: data.lastName,
				middle_name: data.patronymic,
				phone: data.phone
			},
			newEmail: {email: data.email}
		}
	} else {
		// init default values for registered user
		initialValues = {
			contactOrderInfo: {
				phone: phone ? phone.slice(3) : '',
				first_name: l && f,
				last_name: l,
				middle_name: m
			}
		}
	}
	return {
		initialValues
	}
}

export const mapActionsToProps = dispatch => ({})
