import {
	signin,
	VerifyEmail
} from 'api'

export const registration = (data) => {
	return async () => {
		const res = signin(data)
		return res
	}
}
export const confirmEmail = (data) => {
	return async () => {
		const res = await VerifyEmail(data)
		return res
	}
}
