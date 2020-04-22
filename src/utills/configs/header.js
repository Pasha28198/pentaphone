export const chooseTitle = location => {
	switch (location) {
	case 'my-buys': return 'Покупки'
	case 'my-sales': return 'Продажи'
	case 'my-advertisments': return 'Объявления'
	case 'favorits': return 'Избранное'
	case '300': return 'Покупка с проверкой'
	case '100': return 'Покупка без проверки'
	default: return ''
	}
}

export const checkActiveArrow = location =>
	location === 'order' ||
    location === 'user' ||
	location === 'reset-password'
