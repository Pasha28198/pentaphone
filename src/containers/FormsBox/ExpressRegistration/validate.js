export default (values) => {
	const errors = {}
	if (values.contactOrderInfo && !values.contactOrderInfo['first_name']) {
		errors.contactOrderInfo['first_name'] = 'Заполни поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.expressRegistration)) {
		errors.expressRegistration = 'Введите корректные данные'
	}
	return errors
}
