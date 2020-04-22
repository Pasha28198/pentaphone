import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Field} from 'redux-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DropDown from 'components/FunctionalityChunks/DropDown'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class PostForm extends Component {
	state={
		cities: [],
		city: {},
		department: {},
		departments: [],
		searchedCity: '',
		searchedDepartment: '',
		dropDownCity: false,
		dropDownDepartment: false,
		countDepart: 0,
		countCities: 0
	}
	searchCities = (query = '', page = 1) =>
		this.props.searchCities(query, false, page)
			.then(({results, count}) =>
				this.setState({
					department: {name: ''},
					cities: page > 1 && !query ? [...this.state.cities, ...results] : results,
					countCities: Math.ceil(count / 20)
				})
			)

	searchDepartments = (query, page = 1) =>
		this.props.searchDepartments(this.props.cityInReduxForm, page, query)
			.then(({results, count}) => {
				this.setState({
					departments: page > 1 && !query ? [...this.state.departments, ...results] : results,
					countDepart: Math.ceil(count / 20)
				})
			})

	componentDidMount () {
		const {
			defaultCity, searchCities,
			searchDepartment, defaultDepart
		} = this.props

		if (defaultCity) {
			searchCities(defaultCity, true).then(city =>
				defaultDepart
					? searchDepartment(defaultDepart)
						.then(department => this.setState({city, department}))
					: this.setState({city})
			)
		}

		document.body.onclick = e => {
			const {city, department} = this.state

			if (e.target.className !== 'inp' && e.target.className !== 'inpDepart') {
				this.inpDepart.value = department.name || ''
				this.inp.value = city.name || ''
				this.setState({dropDownCity: false})
				this.setState({dropDownDepartment: false})
			}
		}
	}

	componentWillUnmount () { document.body.onclick = () => null }

	render () {
		const {
			searchCities, searchDepartments,
			state: {
				cities, city, department, departments, dropDownCity,
				dropDownDepartment, countDepart, countCities
			}
		} = this

		return (
			<div styleName="postForm">
				<h2 styleName="descr">
					Отделение «Нова пошта»
				</h2>
				<div>
					<Field
						name='shipment_city'
						component={DropDown}
						data={cities}
						defaultsValue={city}
						search={searchCities}
						count={countCities}
						label={'Город'}
						context={this}
						active={dropDownCity}
						hideDropDown={() => this.setState({dropDownCity: false, searchedCity: ''})}
						showDropDown = {() => this.setState({dropDownCity: true})}
						hideDepart={() => this.setState({dropDownDepartment: false})}
						onChangeValue={e => this.setState({searchedCity: e.target.value})}
						changeDefValue={city => this.setState({city})}
						disabled={''}
					/>
					<Field
						component={DropDown}
						name='shipment_department'
						data={departments}
						defaultsValue={department}
						search={searchDepartments}
						label={'Отделение'}
						context={this}
						count={countDepart}
						active={dropDownDepartment}
						hideDropDown={
							() => this.setState({
								dropDownDepartment: false,
								dropDownCity: false,
								searchedDepartment: ''
							})
						}
						showDropDown={() => this.setState({dropDownDepartment: true})}
						hideCity={() => this.setState({dropDownCity: false})}
						onChangeValue={e => { this.setState({searchedDepartment: e.target.value}) }}
						changeDefValue={department => this.setState({department})}
						disabled={!city.name}
					/>
				</div>
			</div>
		)
	}
}

PostForm.propTypes = {
	searchCities: PropTypes.func,
	defaultCity: PropTypes.string,
	searchDepartment: PropTypes.func,
	searchDepartments: PropTypes.func,
	defaultDepart: PropTypes.func,
	cityInReduxForm: PropTypes.string
}

export default PostForm
