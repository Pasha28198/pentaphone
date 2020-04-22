import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

const GetName = (props) => {
	const {name: value, getName} = props
	const onChange = e => getName(e.target.value)
	const styleName = 'verifyNumber-input'
	const placeholder = 'Введите Ваше имя'
	return (
		<div className={styles.verifyNumber}>
			<input {...{value, onChange, className: styles[styleName], placeholder, type: 'text'}} />
		</div>
	)
}

GetName.propTypes = {
	name: PropTypes.string,
	getName: PropTypes.func
}

export default GetName
