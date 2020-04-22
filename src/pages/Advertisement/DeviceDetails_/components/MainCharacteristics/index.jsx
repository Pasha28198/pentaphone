import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { condition, visualConditional } from 'utills/main/conditional'
import iconCheck from 'src/assets/icons/imeiCheck.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class MainCharacteristics extends Component {
	state={allChar: false}
	render () {
		const {
			props: {data, type, otherDetails},
			state: {allChar}
		} = this

		if (Object.keys(data).length || otherDetails) {
			const {
				specification,
				accessories,
				condition: conditional,
				visual_condition: visCond,
				is_imei: imei
			} = data

			const styleName =
				type === 'bargain'
					? 'wrapperCharacteristics'
					: 'wrapperCharacteristics details'

			const colorObj = specification.find(item => item['spec_type'] === 'Color')
			const color = colorObj ? colorObj.name : 'Не указан'
			const storage = specification.find(item => item['spec_type'] === 'Storage Capacity').name

			const otherDetails = specification.filter(item => {
				if (
					item['spec_type'] !== 'Color' &&
					item['spec_type'] !== 'Storage Capacity'
				) return item
			})
			return (
				<div {...{styleName}}>
					<h2>Характеристики устройства:</h2>
					<If condition={imei}>
						<h3><img src={iconCheck} alt=""/>Проверен! Не значится в базе МВД Украины</h3>
					</If>
					<figure>
						<div>Цвет</div>
						<div>{color}</div>
					</figure>
					<figure>
						<div>Память</div>
						<div>{storage}</div>
					</figure>
					<If condition={visualConditional[visCond]}>
						<figure>
							<div>Внешнее состояние</div>
							<div>{visualConditional[visCond]}</div>
						</figure>
					</If>
					<If condition={condition[conditional]}>
						<figure>
							<div>Состояние</div>
							<div>{condition[conditional]}</div>
						</figure>
					</If>
					<figure>
						<div>Комплектация</div>
						<div>
							<Choose>
								<When condition={accessories.length}>
									<For each='item' index='i' of={accessories}>
										<Choose>
											<When condition={i === 0}>
												<p key={i}>
													{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
												</p>
											</When>
											<Otherwise>
												<p key={i}>{item.name}</p>
											</Otherwise>
										</Choose>
									</For>
								</When>
								<Otherwise>
									<p>Нет</p>
								</Otherwise>
							</Choose>
						</div>
					</figure>
					<If condition={otherDetails.length > 1}>
						<If condition={allChar}>
							<For each="item" index='i' of={otherDetails}>
								<figure>
									<div>{item['spec_type']}</div>
									<div>{item.name}</div>
								</figure>
							</For>
						</If>
						<p onClick={() => this.setState(prev => ({ allChar: !prev.allChar }))}>
							{allChar ? 'Оставить основные' : 'Все характеристики'}
						</p>
					</If>
				</div>
			)
		}
	}
}

MainCharacteristics.propTypes = {
	data: PropTypes.object,
	type: PropTypes.string,
	otherDetails: PropTypes.string,
	imei: PropTypes.bool
}
MainCharacteristics.defaultProps = {
	type: 'bargain',
	otherDetails: ''
}
export default MainCharacteristics
