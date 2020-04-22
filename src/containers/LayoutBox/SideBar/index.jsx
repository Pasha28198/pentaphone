import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import FilterBlock from 'src/containers/LayoutBox/FilterBlock'
import SideNewsBar from 'src/containers/LayoutBox/SideNewsBar/index'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
// @CSSModules(styles)

class Example extends Component {
	render () {
		const {locationPage} = this.props
		return (
			<Choose>
				<When condition={locationPage === '/buy/phone' || locationPage === '/buy/tablet' || locationPage === '/buy/laptop' }>
					<FilterBlock/>
				</When>
				<Otherwise>
					<SideNewsBar/>
				</Otherwise>
			</Choose>
		)
	}
}

Example.propTypes = {
	locationPage: PropTypes.string
}

export default Example
