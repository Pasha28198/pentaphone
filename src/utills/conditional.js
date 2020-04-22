
export const condition = {
	100: 'Новый',
	200: 'Б/У',
	400: 'Как новый (refurbished)'
}

export const visualConditional = {
	100: 'Отличное',
	200: 'Хорошее',
	300: 'Средний'
}

export const conditionalConf = Object.keys(condition).map(item => ({name: condition[item], px: item}))

export const visualConditionalConf = Object.keys(visualConditional).map(item => ({name: visualConditional[item], px: item}))
