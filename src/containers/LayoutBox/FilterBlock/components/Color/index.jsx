
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DrobChoose from 'src/components/FunctionalityChunks/DrobChoose'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)

class Color extends Component {
	componentDidMount () {
		this.props.getColors(true)
	}
	render () {
		const {
			colors,
			setFilterNew
		} = this.props
		return (
			<DrobChoose
				label="Цвет"
				data={colors}
				change={(data) => setFilterNew('specs', data + '-color')}
				// moreLoadData={() => { this.props.getColors(false) }}
			/>
		)
	}
}

Color.propTypes = {
	getColors: PropTypes.func,
	setFilterNew: PropTypes.func,
	colors: PropTypes.array
}

export default Color
