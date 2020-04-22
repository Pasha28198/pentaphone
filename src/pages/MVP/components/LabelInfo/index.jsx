import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

import slickSetting, { SliderItem } from './sliderConfig.js'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class LabelInfo extends Component {
	render () {
		const {images, open} = this.props

		return (
			<div styleName="label">
				<div styleName="sliderBundle">
					<div styleName="labelImage">
						<If condition={images.length}>
							<Swiper
								{...slickSetting}
								ref={node => { (node) && (this.swiper = node.swiper) }}
							>
								{ SliderItem(images, open) }
							</Swiper>
						</If>
					</div>
				</div>
			</div>
		)
	}
}

LabelInfo.propTypes = {
	images: PropTypes.array,
	inFavorite: PropTypes.bool,
	addToFavorite: PropTypes.func,
	deleteFavorite: PropTypes.func,
	id: PropTypes.string,
	name: PropTypes.string,
	rating: PropTypes.number,
	view: PropTypes.number,
	ratingTelephone: PropTypes.number,
	number: PropTypes.number,
	condition: PropTypes.bool,
	visualCondition: PropTypes.bool,
	verify: PropTypes.bool,
	verifiedSeller: PropTypes.bool,
	createOrder: PropTypes.func,
	open: PropTypes.func,
	price: PropTypes.string,
	newPrice: PropTypes.string,
	openModal: PropTypes.func
}

export default LabelInfo
