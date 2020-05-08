import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

const Button = (props) => {
	return (
		<a
			className={styles.button}
			href={props.linkTo}
		>
			{props.text}
		</a>
	)
}
Button.propTypes = {
	linkTo: PropTypes.string,
	text: PropTypes.string
}
export default Button
