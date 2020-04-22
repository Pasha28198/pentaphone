export function addElementToLocalStore (data) {
	let listStr = localStorage.getItem('recently')
	if (!listStr) {
		let str = JSON.stringify([data])
		localStorage.setItem('recently', str)
	} else {
		let obj = JSON.parse(listStr)
		if (obj.length > 30) {
			obj.slice(10)
		}
		if (!obj.find(item => item.id === data.id)) {
			localStorage.removeItem('recently')
			let str = JSON.stringify([data, ...obj])
			localStorage.setItem('recently', str)
		}
	}
}

export function getRecently () {
	let data = JSON.parse(localStorage.getItem('recently'))
	return data || []
}
