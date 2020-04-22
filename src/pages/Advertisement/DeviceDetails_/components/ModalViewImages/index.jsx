import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-slick'

import Modal from 'containers/LayoutBox/Modal'
import arrowBack from 'assets/icons/arrowBack.svg'
import closeWhite from 'assets/svg/closeWhite.svg'
import arrowWhite from 'assets/svg/whiteArrow.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class ModalViewImages extends Component {
	state = {
		activeIndex: 1
	}
	render () {
		const { images } = this.props
		return (
			<Modal
				type={'deviceDetails'}
				status={this.props.modal}
				onClick={this.props.openModal}
			>
				<If condition={images && images.length > 0}>
					<Swiper
						ref={node => { (node) && (this.swiper = node.swiper) }}
						styleName="swiperrrr"
						onTouchStart={() => false}
						onTouchMove={() => false}
						onTouchEnd={() => false}
						onTouchCancel={() => false}
						onDragStart={() => false}
					>
						<For each='item' index='index' of={images}>
							<div
								styleName="swiperWrapper"
								key={index}
							>
								<img
									src={item}
									alt="device"
								/>
							</div>
						</For>
					</Swiper>
				</If>
				<div
					styleName="wrapperBack"
				>
					<button
						styleName="butClose"
						onClick={this.openModal}
					>
						<img src={arrowBack} alt=""/>
					</button>
					<span>
						{this.state.activeIndex + 1}/{images.length}
					</span>
				</div>
				<button
					styleName="butCloseOutside"
					onClick={this.openModal}
				>
					<img src={closeWhite} alt=""/>
				</button>
				<If condition={this.state.activeIndex}>
					<button
						onClick={() => {
							this.swiper.slideTo(this.state.activeIndex - 1)
						}}
						styleName="btn arrowLeft"
					>
						<img src={arrowWhite} alt=""/>
					</button>
				</If>
				<If condition={this.state.activeIndex < (images.length - 1)}>
					<button
						onClick={() =>
							this.swiper.slideTo(this.state.activeIndex + 1)
						}
						styleName="btn arrowRight"
					>
						<img src={arrowWimageshite} alt=""/>
					</button>
				</If>
			</Modal>
		)
	}
}

ModalViewImages.propTypes = {
	images: PropTypes.array,
	openModal: PropTypes.func,
	modal: PropTypes.bool
}

export default ModalViewImages
