export const phoneNormalizer = (value, previousValue) => {
	if (!value) {
		return value
	}
	const onlyNums = value.replace(/[^\d]/g, '')
	if (!previousValue || value.length > previousValue.length) {
		// typing forward
		if (onlyNums.length === 3) {
			return onlyNums + ' '
		}
		if (onlyNums.length === 6) {
			return onlyNums.slice(0, 3) + ' ' + onlyNums.slice(3)
		}
	}
	if (onlyNums.length <= 3) {
		if (onlyNums[0] === '0') {
			return '+38 ' + onlyNums
		} else if (onlyNums[0] === '3') {
			return '+' + onlyNums
		}
		return '+' + onlyNums
	}
	if (onlyNums.length <= 6) {
		return '+' + onlyNums.slice(0, 3) + ' ' + onlyNums.slice(3)
	}
	if (onlyNums.length <= 8) {
		return '+' + onlyNums.slice(0, 3) + ' ' + onlyNums.slice(3, 6) + ' ' + onlyNums.slice(6, 8)
	}
	return '+' + onlyNums.slice(0, 3) + ' ' + onlyNums.slice(3, 6) + ' ' + onlyNums.slice(6, 8) + ' ' + onlyNums.slice(8, 12)
}
export const twoDigitFormat = num => num.toString().length === 1 ? 0 + num.toString() : num
