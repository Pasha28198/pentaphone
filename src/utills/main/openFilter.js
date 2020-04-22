export default function () {
	let elem = window.document.querySelector('.FilterSide')

	elem.classList.remove('FilterSide--close')
	elem.classList.add('FilterSide--open')
	document.body.style.overflow = 'hidden'
	document.body.style.position = 'fixed'
	document.body.style.width = '100vw'
}
