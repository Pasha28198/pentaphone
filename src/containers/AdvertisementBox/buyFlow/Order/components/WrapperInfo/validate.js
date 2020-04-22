export default ({contactOrderInfo: info, newEmail}) => {
	const errors = {
		contactOrderInfo: {},
		newEmail: {}
	}
	const regExp = new RegExp(/[^абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦʼ’'ЧШЩЬЮЯ]/)
	if (!info['first_name']) {
		errors.contactOrderInfo['first_name'] = 'Заполните поле'
	} else if (regExp.test(info['first_name'])) {
		errors.contactOrderInfo['first_name'] = 'Доступны только украинские символы'
	}
	if (!info['last_name']) {
		errors.contactOrderInfo['last_name'] = 'Заполните поле'
	} else if (regExp.test(info['last_name'])) {
		errors.contactOrderInfo['last_name'] = 'Доступны только украинские символы'
	}
	if (!info['middle_name']) {
		errors.contactOrderInfo['middle_name'] = 'Заполните поле'
	} else if (regExp.test(info['middle_name'])) {
		errors.contactOrderInfo['middle_name'] = 'Доступны только украинские символы'
	} else if (!newEmail) {
		errors.newEmail.email = 'Заполни поле'
	} else if (newEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newEmail.email)) {
		errors.newEmail.email = 'Введите корректные данные'
	}
	return errors
}
