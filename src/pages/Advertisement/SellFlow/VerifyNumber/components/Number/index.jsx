import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

import PhoneField from 'components/reduxForm/phoneField'
import validate from './validate'

import styles from './styles.scss'

@reduxForm({
	form: 'verifyNumber',
	validate
})
@CSSModules(styles)

class Number extends Component {
	render () {
		const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})
		return (
			<div styleName="number">
				<Field
					name='phone'
					type='text'
					component={PhoneField}
					verifyVisible={true}
					verify={true}
					label="Phone number"
					{...phoneMask}
				/>
			</div>
		)
	}
}

Number.propTypes = {
	addPhone: PropTypes.func,
	error: PropTypes.string
}

export default Number
