import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const TabPane = props => {
	const {
		mainText, compare,
		current, higher
	} = props

	let value = (compare > 1) ? Math.round((compare - 1) * 100) : Math.round((1 - compare) * 100)
	const string = higher ? 'ниже' : 'выше'
	return (
		<div styleName="tab">
			<If condition={compare && value && value !== Infinity}>
				<p>
					Вы установили стоимость в <span>{Math.round(current)}</span>
					{` грн.  что на ${value}% ${string} средней стоимости`}
				</p>
			</If>
			<p>{mainText}</p>
		</div>
	)
}

TabPane.propTypes = {
	mainText: PropTypes.string,
	compare: PropTypes.number,
	current: PropTypes.number,
	higher: PropTypes.string
}

TabPane.defaultProps = {
	compare: 0
}

export default CSSModules(TabPane, styles)
