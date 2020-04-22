
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DrobChoose from 'src/components/FunctionalityChunks/DrobChoose'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)

class Conditions extends Component {
	render () {
		const {
			conditions,
			setFilterNew
		} = this.props
		return (
			<React.Fragment>
				<DrobChoose
					label="Состояние"
					data={ conditions }
					open={true}
					change={(data) => { setFilterNew('condition', data) }}
				/>
			</React.Fragment>
		)
	}
}

Conditions.propTypes = {
	setFilterNew: PropTypes.func,
	conditions: PropTypes.object,
	visualConditions: PropTypes.object,
	statusVisualCondition: PropTypes.bool
}

export default Conditions
