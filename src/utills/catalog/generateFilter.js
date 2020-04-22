const objToStr = (value, name) => name !== 'specs'
	? '&' + name + '=' + value.join(`&${name}=`)
	: '&' + name + '=' + value.join(`&${name}=`)
const verify = (current, obj) => typeof obj[current] === 'object' ? objToStr(obj[current], current) : '&' + current + '=' + obj[current]

export default function (obj) {
	return Object.keys(obj).reduce((prev, current) => {
		if (current === 'device_type') {
			return prev
		}
		if ((obj[current] && obj[current].length) || (obj[current] && typeof obj[current] === 'number')) {
			const str = verify(current, obj)
			return prev + str
		} else {
			return prev
		}
	}, '')
}

const objToStr1 = (value, name) => name !== 'specs'
	? '&' + name + '=' + value.join(`&${name}=`)
	: '&' + name + '=' + value.join(`&${name}=`).split('-')[0]

const verify1 = (current, obj) => typeof obj[current] === 'object' ? objToStr1(obj[current], current) : '&' + current + '=' + obj[current]

export const createQueryInLink = (obj) => {
	return Object.keys(obj).reduce((prev, current) => {
		if ((obj[current] && obj[current].length) || (obj[current] && typeof obj[current] === 'number')) {
			const str = verify1(current, obj)
			return prev + str
		} else {
			return prev
		}
	}, '')
}

export const parseFilterInQuery = (search, type) => {
	let newObj = {}

	search.slice(1).split('&').forEach(item => {
		if (newObj[item.split('=')[0]]) {
			newObj[item.split('=')[0]] = Array.isArray(newObj[item.split('=')[0]])
				? [...newObj[item.split('=')[0]], item.split('=')[1]]
				: [newObj[item.split('=')[0]], item.split('=')[1]]
		} else {
			newObj[item.split('=')[0]] = item.split('=')[1]
		}
	})

	newObj['device_type'] = type

	return newObj
}
