export default (values) => {
	const errors = {}
	if (!values.phone) {
		errors.phone = 'Заполните поле'
	} else if (values.phone < 10) {
		errors.phone = 'Введите корректный номер'
	}
	if (!values.email) {
		errors.email = 'Заполните поле'
	}
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Введите корректный электронный адрес'
	}
	if (!values.name) {
		errors.name = 'Заполните поле'
	}
	if (!values.city) {
		errors.city = 'Заполните поле'
	}
	if (!values.adress) {
		errors.adress = 'Заполните поле'
	}
	console.log(errors)
	return errors
}
