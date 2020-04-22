import { condition } from 'utills/main/conditional.js'

export default (filters, type) => {
	const typeOfTitle = type === 'phone' ? 'мобильные телефоны' : type === 'tablet' ? 'планшеты' : 'ноутбуки'
	const brands = filters.brand.length ? filters.brand.reduce((prev, curent) => prev + ', ' + curent) : ''
	const models = filters.device.length ? filters.device.reduce((prev, curent) => prev + ', ' + curent) : ''
	const storage = filters.specs.length
		? filters.specs.filter(item => item.split('_')[0] === 'storage')
			.reduce((prev, cur) =>
				prev + ' ' + cur.split('_')[1].split('-')[0] + 'gb,', ''
			)
		: ''
	const conditions = condition[filters.condition]

	return (
		`${typeOfTitle} ` +
		`${brands || ''} ` +
		`${models ? ',' + models + ',' : ''} ` +
		`${conditions ? ',' + conditions : ''} ` +
		`${storage ? ',' + storage : ''} ` +
		`${filters.search ? filters.search : ''}`
	)
}
