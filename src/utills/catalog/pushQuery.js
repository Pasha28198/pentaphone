export default function (query) {
	window.history.pushState({}, '', window.location.protocol + '//' + window.location.host + window.location.pathname + query)
}
