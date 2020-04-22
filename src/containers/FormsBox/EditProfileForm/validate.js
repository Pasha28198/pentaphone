export default (values) => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Заполните поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(values.email)) {
		errors.email = 'Введите корректные данные'
	}
	if (!values.firstName) {
		errors.firstName = 'Заполните обязательное поле'
	}
	if (!values.lastName) {
		errors.lastName = 'Заполните обязательное поле'
	}
	if (!values.phone) {
		errors.phone = 'Заполните обязательное поле'
	}
	if (values.phone && values.phone.length < 10) {
		errors.phone = 'Введите корректные данные'
	}
	return errors
}
