export default (values) => {
	const errors = {}
	if (!values.phone) {
		errors.phone = 'Вы не ввели номер'
	} else if (values.phone.length < 10) {
		errors.phone = 'Введите корректный номер'
	}
	return errors
}
