import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Example extends Component {
	render () {
		const {data, step} = this.props
		const index = data.find(item => item.name === step).id
		return (
			<div>
				<For each='item' index="i" of={data}>
					<div
						key={i}
						styleName={i > index ? 'labelItem' : 'labelItem disable'}
					>
						{item.label}
					</div>
				</For>
			</div>
		)
	}
}

Example.propTypes = {
	data: PropTypes.array,
	step: PropTypes.string
}

export default Example
