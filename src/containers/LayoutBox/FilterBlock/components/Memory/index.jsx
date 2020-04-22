import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DrobChoose from 'src/components/FunctionalityChunks/DrobChoose'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)

class Memory extends Component {
	componentDidMount () {
		this.props.getMemory(true)
	}
	render () {
		const {
			setFilterNew, memory
		} = this.props
		return (
			<div>
				<DrobChoose
					label="Память"
					data={memory}
					change={(data) => setFilterNew('specs', data + '-memory')}
					// moreLoadData={() => { getMemory(false) }}
				/>
			</div>
		)
	}
}

Memory.propTypes = {
	setFilterNew: PropTypes.func,
	getMemory: PropTypes.func,
	memory: PropTypes.array
}

export default Memory
