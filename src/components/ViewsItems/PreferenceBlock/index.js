import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const PreferenceElement = (props) => (
	<div className={styles.preferenceItem}>
		<img src={ props.img } alt="verify"/>
		<h2>{ props.label }</h2>
		<p>{ props.description }</p>
	</div>
)

PreferenceElement.propTypes = {
	img: PropTypes.string,
	label: PropTypes.string,
	description: PropTypes.string
}

export default PreferenceElement
