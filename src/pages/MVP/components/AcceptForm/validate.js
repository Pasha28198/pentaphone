export default (values) => {
	const errors = {}
	if (!values.phone) {
		errors.phone = 'Заполните поле'
	} else if (values.phone < 10) {
		errors.phone = 'Введите корректный номер'
	}
	if (!values.city) {
		errors.city = 'Заполните поле'
	}
	if (!values.adress) {
		errors.adress = 'Заполните поле'
	}
	return errors
}
