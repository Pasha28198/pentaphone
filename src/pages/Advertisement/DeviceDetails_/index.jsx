import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import ReactPixel from 'react-facebook-pixel'

import Modal from 'containers/LayoutBox/Modal'
import arrowBack from 'assets/icons/arrowBack.svg'
import closeWhite from 'assets/svg/closeWhite.svg'
import arrowWhite from 'assets/svg/whiteArrow.svg'
import LabelInfo from './components/LabelInfo'
import ShortCharacteristics from './components/ShortCharacteristics'
import UserInfo from './components/UserInfo'
import InfoVerify from './components/InfoVerify'
import AboutDeviceAndSeller from './components/AboutDeviceAndSeller'
import MainCharacteristics from './components/MainCharacteristics'
import WhoVerifySeller from './components/WhoVerifySeller'
import Spinner from 'src/components/Chunks/Spinner'

import Recommendet from './components/Recommendet'
import TelephoneRating from './components/TelephoneRating'
import { addElementToLocalStore } from 'utills/recentlyView.js'
import {s} from 'utills/functional.js'
import RecentlyView from './components/RecentlyVIew'
import BuyWithOneClick from './components/BuyWithOneClick'
import SendTheSameGoods from './components/SendTheSameGoods'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import './styles.css'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class DeviceDetails_ extends Component {
	// init state
	state = {
		modal: false,
		modalNumber: false,
		modalEmail: false,
		selectedIndex: 0,
		currentSlide: 1,
		activeIndex: 0
	}

	// handler for adding elements to recently view
	pushElementToRecentlyView = () => {
		const {id, name, price, images} = this.props

		addElementToLocalStore({
			img: images,
			id,
			price,
			name
		})
	}

	// open modal window with full screen image
	openModal = (indexSlide) => {
		this.swiper.on('slideChange', () =>
			this.setState({activeIndex: this.swiper.activeIndex}))

		this.setState({
			selectedIndex: this.swiper.activeIndex,
			currentSlide: this.swiper.activeIndex + indexSlide
		})

		this.setState(prev => ({modal: !prev.modal}))
		if (!this.state.modal) {
			this.swiper.slideTo(indexSlide)
		}
	}

	// send email to user gets the same goods on his mail
	onHandleGetTheSameGoods = ({email}) => {
		this.toogleEmailModal()
		this.props.sendEmail({item: this.props.id, email})
	}

	// open close modal window for one click order
	toggleModalNumber = () =>
		this.setState(prev => ({modalNumber: !prev.modalNumber}))

	// open close modal window for getting the same goods
	toogleEmailModal = () =>
		this.setState(prev => ({modalEmail: !prev.modalEmail}))

	// send data for one click order, close modal window and push to thank you page
	onSubmitOneClickOrder = ({phone: ph}) => {
		const {
			createExpressOrder,
			id: item,
			toThankYouPage
		} = this.props
		const phone = '+38' + ph
		createExpressOrder({'buyer_phone': phone, item})
			.then(({status}) =>
				s(status) &&
				!this.toggleModalNumber() &&
				toThankYouPage()
			)
	}

	reactPixelTrack = (action, {id, name}) => {
		ReactPixel.track(action, {
			'content_type': 'product',
			'content_ids': id,
			'content_category': 'Смартфоны',
			'content_name': name + ' + защитное стекло + чехол в подарок!'
		})
	}

	// clear all information for visible another device
	componentWillMount () { this.props.cleanInfo() }

	// change information if id device in url changed
	// and push device to recently view
	componentWillReceiveProps ({parentProps, name}) {
		if (this.props.name !== name) {
			const params = {id: parentProps.match.params.id, name}
			this.reactPixelTrack('ViewContent', params)
		}
		if (parentProps.match.params.id !== this.props.parentProps.match.params.id) {
			this.pushElementToRecentlyView()
			this.props.getInfo(parentProps.match.params.id)
			window.scrollTo(0, 0)
		}
	}

	// scroll to top and get information firstly
	componentDidMount () {
		window.scrollTo(0, 0)
		this.props.getInfo(this.props.parentProps.match.params.id)
	}

	// when user leaves page, saving this device in recently view
	componentWillUnmount () { this.pushElementToRecentlyView() }

	render () {
		// init values from state, redux, and functionality
		const {
			state: {modalNumber, modal, modalEmail},
			props: {images, parentProps: {match}, verifySeller, name, type, price},
			openModal, toggleModalNumber, onSubmitOneClickOrder, reactPixelTrack,
			toogleEmailModal, onHandleGetTheSameGoods
		} = this

		return (
			<div>
				<Choose>
					<When condition={price}>
						<LabelInfo
							open={openModal}
							openModal={() => {
								reactPixelTrack('AddToCart', {id: match.params.id, name})
								toggleModalNumber()
							}}
							openEmailModal={toogleEmailModal}
						/>
						<ShortCharacteristics/>
						<div styleName="hideDesc"><UserInfo/></div>
						<WhoVerifySeller/>
						<InfoVerify verifySeller={verifySeller} type={type}/>
						<AboutDeviceAndSeller/>
						<MainCharacteristics/>
						<TelephoneRating/>
						<Recommendet id={match.params.id}/>
						<RecentlyView id={match.params.id}/>
						<Modal
							onClick={toggleModalNumber}
							type='filter'
							status={modalNumber}

						>
							<BuyWithOneClick
								closeModal={toggleModalNumber}
								onSubmit={onSubmitOneClickOrder}
							/>
						</Modal>
						<Modal
							onClick={toogleEmailModal}
							type='filter'
							status={modalEmail}
						>
							<SendTheSameGoods
								closeModal={toogleEmailModal}
								onSubmit={onHandleGetTheSameGoods}
							/>
						</Modal>
						<Modal
							type={'deviceDetails'}
							status={modal}
							onClick={openModal}
						>

							<If condition={images && images.length > 0}>
								<Swiper
									ref={node => { (node) && (this.swiper = node.swiper) }}
									containerModifierClass="swiperrrr-"
									onTouchStart={() => false}
									onTouchMove={() => false}
									onTouchEnd={() => false}
									onTouchCancel={() => false}
									onDragStart={() => false}
								>
									<Choose>
										<When condition={typeof images !== 'string'}>
											<For each='item' index='index' of={images}>
												<div
													styleName="swiperWrapper"
													key={index}
												>
													<img
														src={item.image.medium}
														alt="device"
													/>
												</div>
											</For>
										</When>
										<Otherwise>
											<div
												styleName="swiperWrapper"
											>
												<img
													src={images} n
													alt="device"
												/>
											</div>
										</Otherwise>
									</Choose>
								</Swiper>
							</If>

							<div
								styleName="wrapperBack"
							>
								<button
									styleName="butClose"
									onClick={openModal}
								>
									<img src={arrowBack} alt=""/>
								</button>
								<span>
									{this.state.activeIndex + 1}/{typeof images === 'string' ? 1 : images.length }
								</span>
							</div>
							<button
								styleName="butCloseOutside"
								onClick={this.openModal}
							>
								<img src={closeWhite} alt=""/>
							</button>
							<If condition={this.state.activeIndex && images.length > 1 && typeof images !== 'string'}>
								<button
									onClick={() => this.swiper.slideTo(this.state.activeIndex - 1)}
									styleName="btn arrowLeft"
								>
									<img src={arrowWhite} alt=""/>
								</button>
							</If>
							<If condition={this.state.activeIndex < (images.length - 1) && typeof images !== 'string'}>
								<button
									onClick={() => this.swiper.slideTo(this.state.activeIndex + 1)}
									styleName="btn arrowRight"
								>
									<img src={arrowWhite} alt=""/>
								</button>
							</If>
						</Modal>
					</When>
					<Otherwise>
						<Spinner/>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}

DeviceDetails_.propTypes = {
	getInfo: PropTypes.func,
	cleanInfo: PropTypes.func,
	parentProps: PropTypes.object,
	images: PropTypes.array,
	id: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	createExpressOrder: PropTypes.func,
	toThankYouPage: PropTypes.func,
	verifySeller: PropTypes.bool,
	type: PropTypes.string,
	sendEmail: PropTypes.func
}

export default DeviceDetails_
