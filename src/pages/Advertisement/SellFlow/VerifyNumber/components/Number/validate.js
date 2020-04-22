export default (values) => {
	const errors = {}
	if (!values.phone) {
		errors.email = 'Required'
	} else if (values.phone < 10) {
		errors.email = 'number is invalid'
	}
	return errors
}
