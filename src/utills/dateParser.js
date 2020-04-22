export function ToComents (value) {
	let b = new Date(value)
	let options = {
		year: 'numeric', month: 'long', day: 'numeric'
	}
	let date = b.toLocaleDateString('en-us', options).split(',').join('')
	return date
}

export const parseHash = hash =>
	hash.substr(1)
		.split('&')
		.reduce((obj, item) => {
			const [key, value] = item.split('=')
			if (key === 'access_token') {
				obj['access_token'] = value
			} else if (key === 'code') {
				obj['code'] = value
			}
			return obj
		}, {})

export function parseDate (str) {
	const prsdStr = str.split('.')[0].split('T')
	prsdStr[0] = prsdStr[0].split('-').join('.')
	prsdStr[1] = prsdStr[1].substr(0, 5)
	return prsdStr[0] + ' ' + prsdStr[1]
}
