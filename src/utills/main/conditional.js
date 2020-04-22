
export const condition = {
	100: 'Новый',
	200: 'Б/У',
	400: 'Как новый (refurbished)',
	300: 'Не рабочий'
}

export const visualConditional = {
	201: 'Отличное',
	202: 'Хорошее',
	203: 'Средний'
}

const cond = Object.keys(condition).map(item => ({name: condition[item], pk: item}));
[cond[3], cond[2]] = [cond[2], cond[3]]

export const conditionalConf = [...cond]

export const visualConditionalConf = Object.keys(visualConditional).map(item => ({name: visualConditional[item], pk: item}))
