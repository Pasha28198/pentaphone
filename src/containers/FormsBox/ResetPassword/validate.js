export default (values) => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Заполните поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Введите корректные данные'
	}
	return errors
}
