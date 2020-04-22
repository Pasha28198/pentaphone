import React from 'react'
import propTypes from 'prop-types'
import './styles.css'

function Checkbox ({checked, onChange, labelText}) {
	return (
		<div>
			<label className="container">
				<input onClick={onChange} type="checkbox" checked={checked ? 'checked' : ''}/>
				<span className="checkmark"></span>
				<span className="labelText">{labelText}</span>
			</label>
		</div>
	)
}

Checkbox.propTypes = {
	checked: propTypes.bool,
	onChange: propTypes.func,
	labelText: propTypes.string
}

export default Checkbox
