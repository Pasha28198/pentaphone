export default (id, openModal) => {
	if (id) {
		if (!localStorage.getItem(id)) {
			setTimeout(() => openModal(), 10)
			localStorage.setItem(id, 'true')
		}
	} else {
		if (!sessionStorage.getItem('unregistr')) {
			setTimeout(() => openModal(), 10)
			sessionStorage.setItem('unregistr', 'true')
		}
	}
}
