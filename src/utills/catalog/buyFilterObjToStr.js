export default (obj) => {
	return Object
		.keys(obj)
		.map(item => {
			if (obj[item]) {
				if (item === 'color' || item === 'opacity') {
					return obj[item].reduce((prev, cur) => {
						return prev + `${cur && `specification=${cur}&`}`
					}, '')
				} else if (item === 'brand') {
					return obj[item].reduce((prev, cur) => {
						return prev + `${cur && `${item}=${cur}&`}`
					}, '')
				} else if (item !== 'is_bet') {
					return `${item}=${obj[item]}&`
				}
			}
		})
		.join('')
}
