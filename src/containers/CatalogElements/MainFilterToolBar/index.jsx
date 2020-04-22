import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
	Checkbox as CheckboxDesc,
	Dropdown
} from 'semantic-ui-react'
import Toggle from 'react-toggle'

import openFilter from 'utills/main/openFilter.js'
import Price from './components/Price'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import './toombler.css'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class MainFilterToolBar extends Component {
	changePrice = () => {
		const {
			price,
			setFilterNew
		} = this.props

		setFilterNew(
			'ordering',
			price === 'price'
				? '-price'
				: 'price'
		)
	}

	newDevice = () => {
		this.props.setFilterNew('ordering', '-created_at')
	}

	handleBaconChange = () => {
		const {
			review,
			setFilterNew
		} = this.props

		setFilterNew(
			'verified_seller',
			(!review).toString() === 'true'
				? 'true'
				: ''
		)
	}

	render () {
		const {
			props: {
				setFilterNew,
				review, price,
				countActiveFilter
			},
			handleBaconChange,
			changePrice
		} = this
		return (
			<div styleName="MainFilterToolBar">
				<div
					styleName="MainFilterToolBar-deepFilt"
				>
					<span
						onClick={openFilter}
					>
						Фильтр <span>({countActiveFilter})</span>
					</span>
					<span
						onClick={this.newDevice}
						style={price === '-created_at' ? {color: '#FA2A00'} : {color: '#5C6979'}}
					>
						Новинки
					</span>
					<span>
						<span
							onClick={changePrice}
							styleName="MainFilterToolBar-deepFilerDesс"
							style={price === '-price' || price === 'price' ? {color: '#FA2A00'} : {color: '#5C6979'}}
						>
							Цена
							<figure styleName="MainFilterToolBar-deepFilt--arrow">
								<svg
									width="8" height="4"
									viewBox="0 0 8 4" fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="Triangle" fillRule="evenodd"
										clipRule="evenodd" d="M4 0L8 4H0L4 0Z"
										fill={ price === '-price' ? '#FA2A00' : '#5C6979'}
									/>
								</svg>

								<svg
									width="8" height="4"
									viewBox="0 0 8 4" fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="Triangle" fillRule="evenodd"
										clipRule="evenodd" d="M4 4L8 0H0L4 4Z"
										fill={ price === 'price' ? '#FA2A00' : '#5C6979'}
									/>
								</svg>
							</figure>
						</span>
						<span styleName="MainFilterToolBar-deepFilerMob">
							<Dropdown text='Сортировка'>
								<Dropdown.Menu>
									<Dropdown.Item
										onClick={() => { setFilterNew('ordering', '-created_at') }}
										text='Новые'
									/>
									<Dropdown.Item
										onClick={() => { setFilterNew('ordering', 'price') }}
										text='От дешевых к дорогим'
									/>
									<Dropdown.Item
										onClick={() => { setFilterNew('ordering', '-price') }}
										text='От дорогих к дешевым'
									/>
								</Dropdown.Menu>
							</Dropdown>
							<svg
								styleName="MainFilterToolBar-deepFilt--arrowDesc"
								width="8" height="4"
								viewBox="0 0 8 4" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									id="Triangle" fillRule="evenodd"
									clipRule="evenodd" d="M4 4L8 0H0L4 4Z"
									fill="#5C6979"/>
							</svg>
						</span>
					</span>
				</div>
				<Price/>
				<label styleName="label">
					<div styleName="check">
						<CheckboxDesc
							className="check"
							checked={ Boolean(review) }
							onChange={ handleBaconChange }
						/>
					</div>
					<span styleName="MainFilterToolBar-verify">С гарантией</span>
					<Toggle
						className='toomb'
						defaultChecked={ Boolean(review) }
						onChange={ handleBaconChange }
						icons={ false }
					/>
				</label>
			</div>
		)
	}
}

MainFilterToolBar.propTypes = {
	setFilterNew: PropTypes.func,
	review: PropTypes.string,
	price: PropTypes.string,
	countActiveFilter: PropTypes.number
}

export default MainFilterToolBar
