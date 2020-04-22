import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import heart from 'assets/icons/heart2.svg'
import heartFavorit from 'assets/icons/heart.svg'
import Spinner from 'assets/svg/SpinnerUpload.svg'
import Delete from 'assets/svg/rubbish.svg'
import {condition} from 'utills/conditional'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ItemDevice extends Component {
	state = {
		loaderImage: true,
		activeFavorite: false
	}
	createNewFavorite = (e, id) => {
		e.preventDefault()
		this.props.addToFavorite(id)
		this.setState({activeFavorite: true})
	}
	deleteFavorite = (e, id) => {
		e.preventDefault()
		this.props.deleteFavorite(id)
	}
	componentWillMount () {
		const {image} = this.props
		if (image) {
			const img = new Image()
			img.addEventListener('load', () => {
				this.setState({loaderImage: false})
			})
			img.src = image
		}
	}

	render () {
		const {
			props: {data, image, favorite, auth},
			state: {loaderImage, activeFavorite},
			deleteFavorite, createNewFavorite
		} = this
		return (
			<Link
				to={`/device-bargain/${data.id}`}
				styleName="deviceWrapper"
			>
				<img styleName="deviceWrapper-image" alt="image" src={loaderImage ? Spinner : image}/>
				<article
					styleName="deviceWrapper-descriptions"
				>
					<h4>{data.name}</h4>
					<span styleName="price">
						{parseInt(data.price).toLocaleString()}
						<span styleName="price-currency">грн</span>
					</span>
					<span styleName="conversation">
						Состояние: {condition[data.condition]}
					</span>
					{/* <span styleName="rate"> */}
					{/* Сделано ставок:  50 */}
					{/* </span> */}
					{/* <span styleName="timeToEnd"> */}
					{/* Остался 1 час (Окончание 13:43) */}
					{/* </span> */}
				</article>
				<Choose>
					<When
						condition={
							(favorite || data['in_favorite'] || activeFavorite) &&
							auth }
					>
						<img src={heartFavorit} styleName="favorite"/>
					</When>
					<Otherwise>
						<img
							src={heart}
							styleName="favorite"
							onClick={(e) => { createNewFavorite(e, data.id) }}
						/>
					</Otherwise>
				</Choose>
				<If condition={ favorite }>
					<img
						src={Delete}
						alt="delete"
						styleName="DeleteFavorite"
						onClick={(e) => {
							e.preventDefault()
							deleteFavorite(e, data.id)
						}}
					/>
				</If>
			</Link>
		)
	}
}

ItemDevice.propTypes = {
	data: PropTypes.object,
	image: PropTypes.string,
	addToFavorite: PropTypes.func,
	deleteFavorite: PropTypes.func,
	favorite: PropTypes.bool,
	ratingCount: PropTypes.number,
	auth: PropTypes.bool
}

export default ItemDevice
