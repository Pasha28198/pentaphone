import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { List as TransList, Transition } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// import numeral from 'numeral'

import LabelInfo from '../../components/LabelInfo/index'
import Block from './Block/index'
import List from './List/index'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class DeviceResult extends Component {
	componentWillMount () {
		const {images, pushTo} = this.props
		const SCREEN = 1024
		window.innerWidth > SCREEN && pushTo('error-desktop')
		!images.length && pushTo('phone')
	}

	render () {
		const { data, cleanInfo, type, dopData, middlePrice } = this.props
		const newDevice = data.find(({key}) => (key === 'condition')) || {}

		return (
			<div>
				<div styleName="deviceResult" className="selected">
					<LabelInfo
						open={() => {}}
						openModal={() => {}}
					/>
					<div styleName="photoDesc">Фото от производителя</div>
					<If condition={type === 'list'}>
						<List data={[...data, ...dopData]}/>
					</If>
					<Transition.Group
						className='selected'
						styleName={!data.length > 0 ? 'selected' : 'selected selected-visible'}
						as={TransList}
						duration={300}
					>
						<If condition={data.length && type === 'block'}>
							<For each='item' index='index' of={data}>
								<TransList.Item key={index}>
									<If
										condition={
											!(+newDevice.pk === 100 && item.key === 'visual_condition')
										}
									>
										<Block {...{index, item, cleanInfo}} key={index} />
									</If>
								</TransList.Item>
							</For>
						</If>
					</Transition.Group>
					<div styleName="priceBlock">
						<h3>Рекомендованная цена:</h3>
						<span>{middlePrice / 2} <span>грн</span></span>
					</div>
					<Link to='/buyout/geolocation'>
						<button styleName="nextButton">
							Дальше
						</button>
					</Link>
				</div>
			</div>
		)
	}
}

DeviceResult.propTypes = {
	data: PropTypes.array,
	cleanInfo: PropTypes.func,
	type: PropTypes.oneOf(['list', 'block']),
	middlePrice: PropTypes.number,
	dopData: PropTypes.array,
	dataModels: PropTypes.array,
	pushTo: PropTypes.func,
	images: PropTypes.array,
	id: PropTypes.string,
	getPriceWizard: PropTypes.func
}

DeviceResult.defaultProps = {
	type: 'list',
	price: false
}

export default DeviceResult
