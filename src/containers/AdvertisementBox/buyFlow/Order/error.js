import { SubmissionError } from 'redux-form'

export default function (err, prefix) {
	const error = {
		contactOrderInfo: {},
		branchPost: {}
	}
	if (`${prefix}_phone` in err) error.contactOrderInfo.phone = err[`${prefix}_phone`][0]
	if (`${prefix}_first_name` in err) error.contactOrderInfo.first_name = err[`${prefix}_first_name`][0]
	if (`${prefix}_last_name` in err) error.contactOrderInfo.last_name = err[`${prefix}_last_name`][0]
	if (`${prefix}_shipment_city` in err) error.branchPost.shipment_city = 'Это поле не может быть пустым'
	if (`${prefix}_shipment_department` in err) error.branchPost.shipment_department = 'Это поле не может быть пустым'
	if (`${prefix}_middle_name` in err) error.contactOrderInfo.middle_name = err[`${prefix}_middle_name`][0]
	if (Object.keys(error.contactOrderInfo).length || Object.keys(error.branchPost).length) {
		throw new SubmissionError(error)
	}
}
