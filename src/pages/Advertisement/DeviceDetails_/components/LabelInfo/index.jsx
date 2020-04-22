import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import { Popup } from 'semantic-ui-react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import {Link} from 'react-router-dom'

import configPreferences from 'src/utills/configs/configPreferencesDeviceCard.js'
import PreferenceElement from 'components/ViewsItems/PreferenceBlock'
import slickSetting, { SliderItem, SliderItemDesc, descConf } from './sliderConfig.js'
import favorite from 'assets/svg/favoriteRed.svg'
import notFavorite from 'assets/svg/notFavorite.svg'
import viewIcon from 'assets/icons/eye.svg'
import Rating from 'components/Chunks/Rating'
import info from 'assets/infoGrey.svg'
import { priceFormat, saving } from 'src/utills/functional.js'
import UserInfo from '../UserInfo'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class LabelInfo extends Component {
	state = {
		activeTel: false
	}
	// function for remove or add
	// device to favorite depend on inFavorite value
	toomblerFavorite = () => {
		const {
			inFavorite, id,
			addToFavorite, deleteFavorite
		} = this.props
		if (inFavorite) {
			deleteFavorite(id)
			return
		}
		addToFavorite(id)
	}
	// verify state favorite in image
	stateFavorite = data => data ? favorite : notFavorite;
	componentDidUpdate () {
		this.swiper &&
		this.swiper.on('slideChange', () => {
			const swInd = this.swiper.activeIndex
			if (swInd !== this.swiper2.activeIndex) this.swiper2.slideTo(swInd)
		})
	}
	render () {
		const {
			props: {
				images, inFavorite,
				name, view,
				condition, verify,
				verifiedSeller,
				price, newPrice, open,
				ratingTelephone, openEmailModal,
				openModal, number,
				createOrder
			},
			toomblerFavorite, stateFavorite
		} = this

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
						<div styleName="labelImage-favorite">
							<img
								src={ stateFavorite(inFavorite) }
								onClick={ toomblerFavorite }
								alt="favorite"
							/>
						</div>
					</div>
					<div styleName="labelImageDesc">
						<If condition={images.length}>
							<Swiper
								{ ...descConf }
								ref={node => { node && (this.swiper2 = node.swiper) }}
							>
								{ SliderItemDesc(images, this) }
							</Swiper>
						</If>
					</div>
					<div styleName="descUserInfo"><UserInfo/></div>
				</div>
				<div styleName="labelInfoBlock">
					<h1 styleName="labelName">{ name }</h1>

					<div styleName="labelInfo">
						<div styleName="labelInfo-rating">
							<Rating
								size={'big'}
								countRating={parseInt(ratingTelephone) || 0}
							/>
							<span>{Math.round(ratingTelephone * Math.pow(10, 1)) / Math.pow(10, 1) || 0} / 5</span>
						</div>
						<div styleName="labelInfo-view">
							<img src={viewIcon} alt="viewIcon"/>
							{view}
						</div>
						<span styleName="labelInfo-number">
						№ {number}
						</span>
					</div>

					<div styleName="labelPrice">
						<div>{priceFormat(+price)} <span>грн</span></div>
						<p>
							<If condition={condition === 200}>
								<Popup
									trigger={
										<img
											src={info}
											alt="info"
											styleName="labelPrice-infoDesc"
										/>
									}
								>
									<span styleName="popUp">
										Имеется ввиду розничная цена официально
										ввезенного в Украину нового телефона
										аналогичной модели
									</span>
								</Popup>
                                Цена нового {priceFormat(+newPrice)} грн
								<If condition={newPrice > price}>
                                    , экономия {saving(price, newPrice)}
								</If>
							</If>
						</p>
					</div>

					<div styleName="preferenceList">
						<For each="item" of={configPreferences}>
							<If
								condition={
									item.condition(
										condition, verifiedSeller, verify
									)
								}
							>
								<PreferenceElement {...item.info}/>
							</If>
						</For>
					</div>

					<If condition={verifiedSeller}>
						<div styleName="fnButtn">
							<button styleName="oneClick" onClick={openModal}>Купить в один клик</button>
							<button onClick={() => createOrder(600)}>Купить</button>
						</div>
					</If>

					<If condition={!verifiedSeller}>
						<div styleName={this.state.activeTel ? 'fnButtn-active' : 'fnButtn'}>
							<button onClick={() => createOrder(600)}>Купить</button>
						</div>
					</If>
					<div styleName="fnButtn">
						<button
							styleName="sendTheSame"
							onClick={openEmailModal}
						>
							Присылать похожие
						</button>
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
	openModal: PropTypes.func,
	openEmailModal: PropTypes.func
}

export default LabelInfo
