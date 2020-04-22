export default () => {
	const query = window.location.search
	if (query) {
		return query
			.split('?')[1]
			.split('&')
			.reduce((obj, item) => {
				item.split('brand=')[1] && (obj['brand'] = item.split('brand=')[1])
				item.split('models=')[1] && (obj['models'] = item.split('models=')[1])
				return obj
			}, {})
	} else {
		return {}
	}
}
