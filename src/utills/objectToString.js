export default function toString (obj) {
	let str = ''
	Object.keys(obj).map(item => {
		if (obj[item]) {
			str = str + '&' + item + '=' + obj[item]
		}
	})
	return str
}
