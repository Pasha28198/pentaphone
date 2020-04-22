import Numeral from 'numeral'

// for verify response status
export const s = (s) => s === 200 || s === 201

export const verifyImg = (images) => images[0] && images[0].image.medium

export const getLazyImage = (images) => images[0] && images[0].image.lazy

export const priceFormat = (value) => Numeral(+value).format('0,0').split(',').join(' ')
	? Numeral(+value).format('0,0').split(',').join(' ')
	: '0'

export const saving = (price, newPrice) => parseInt(100 - 100 * price / newPrice) + '%'

export const exist = (obj, key) => obj && key in obj

export const choseImageForEditDevice = ({currentDevice}, {dopInfo}) => (currentDevice.images && currentDevice.images.length && currentDevice.images[0].image.large) || (dopInfo.uploadImages[0].image && dopInfo.uploadImages[0].image.large)
