export default (values) => (
	{
		name: values.contactOrderInfo['first_name'],
		lastName: values.contactOrderInfo['last_name'],
		patronymic: values.contactOrderInfo['middle_name'],
		email: values.newEmail.email,
		phone: values.contactOrderInfo.phone,
		city: values.branchPost['shipment_city'],
		department: values.branchPost['shipment_department']
	}
)
