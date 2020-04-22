import {
	resetPassword,
	confirmNewPassword
} from 'api'

export const reset = (data) => {
	return async () => {
		await resetPassword(data)
	}
}

export const confirm = (data) => {
	return async () => {
		await confirmNewPassword(data)
	}
}
