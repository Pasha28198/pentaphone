export default (to) => {
	let scrolled = window.pageYOffset
	let timer
	let scrollToTop = () => {
		if (scrolled > to) {
			window.scrollTo(0, scrolled)
			scrolled = scrolled - 50
			timer = setTimeout(scrollToTop, 5)
		} else {
			clearTimeout(timer)
			window.scrollTo(0, to - 100)
		}
	}
	scrollToTop()
}
