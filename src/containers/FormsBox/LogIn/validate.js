export default (values) => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Заполни поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Введите корректные данные'
	} else if (!values.password) {
		errors.password = 'Заполните поле'
	}
	return errors
}
