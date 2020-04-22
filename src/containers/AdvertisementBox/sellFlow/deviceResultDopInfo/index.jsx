import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { List as TransList, Transition } from 'semantic-ui-react'

// import numeral from 'numeral'

import Block from './Block'
import List from './List'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class DeviceResult extends Component {
	render () {
		const { data, cleanInfo, type, dopData, mainImage, goBack } = this.props
		const newDevice = data.find(({key}) => (key === 'condition')) || {}
		return (
			<div>
				<div styleName="deviceResult" className="selected">
					<img
						styleName={!data.length > 0 ? 'Image' : 'Image ImageWithResultBlock'}
						src={mainImage}
						alt="telephone"
					/>
					<div styleName="photoDesc">Фото от производителя</div>
					<If condition={type === 'list'}>
						<List goBack={goBack} data={[...data, ...dopData]}/>
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
	mainImage: PropTypes.string,
	goBack: PropTypes.func
}

DeviceResult.defaultProps = {
	type: 'list',
	price: false
}

export default DeviceResult
