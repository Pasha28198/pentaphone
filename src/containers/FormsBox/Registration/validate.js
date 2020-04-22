export default (values) => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Заполните поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Введите корректный электронный адрес'
	}
	if (!values.password2) {
		errors.password2 = 'Заполните поле'
	} else if (!(values.password2 === values.password1)) {
		errors.password2 = 'Пароли не совпадают'
	}
	return errors
}
