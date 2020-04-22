export default (values) => {
	const errors = {}
	if (!values.password1) {
		errors.password1 = 'Заполните поле'
	} else if (!(values.password1.length > 8)) {
		errors.password1 = 'Должно быть не меньше 9 символов'
	} else if (!/(?=.*[0-9])/g.test(values.password1)) {
		errors.password1 = 'Пароль должен  содержать как минимум одну цифру'
	} else if (/^\d+$/.test(values.password1)) {
		errors.password1 = 'Пароль не может состоять только из цифр'
	}
	if (!values.password2) {
		errors.password2 = 'Заполните поле'
	} else if (!(values.password2 === values.password1)) {
		errors.password2 = 'Пароли не совпадают'
	}

	return errors
}
