import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DrobChoose from 'src/components/FunctionalityChunks/DrobChoose'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)

class DeviceInfo extends Component {
	componentDidMount () {
		this.props.getBrandsElments(true)
	}

	componentWillReceiveProps ({
		brandsInFilter, modelInFilter,
		cleanModels, getModels,
		models
	}) {
		if (
			(brandsInFilter.length > 1 && models.length) ||
			(!brandsInFilter.length && models.length)
		) {
			cleanModels()
		}
		if (brandsInFilter.length === 1 && !models.length) {
			getModels(brandsInFilter[0])
		}
	}

	render () {
		const {
			brands, setFilterNew, models,
			brandsInFilter
		} = this.props

		return (
			<React.Fragment>
				<DrobChoose
					label="Бренд"
					data={ brands }
					change={ (data) => { setFilterNew('brand', data) }}
					open={true}
					// moreLoadData={() => getBrandsElments(false)}
				/>
				<If condition={brandsInFilter.length === 1 && models.length}>
					<DrobChoose
						label="Модель"
						data={ models }
						change={ (data) => { setFilterNew('device', data) }}
						open={true}
					/>
				</If>
			</React.Fragment>
		)
	}
}

DeviceInfo.propTypes = {
	getBrandsElments: PropTypes.func,
	setFilterNew: PropTypes.func,
	brands: PropTypes.array,
	brandsInFilter: PropTypes.array,
	modelInFilter: PropTypes.array,
	getModels: PropTypes.func,
	nextProps: PropTypes.func,
	cleanModels: PropTypes.func,
	models: PropTypes.array
}

export default DeviceInfo
