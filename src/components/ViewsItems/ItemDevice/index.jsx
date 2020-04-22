import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import heart from 'assets/icons/heart2.svg'
import heartFavorit from 'assets/icons/heart.svg'
import Spinner from 'assets/svg/SpinnerUpload.svg'
import Rating from 'components/Chunks/Rating'
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
		this.setState({activeFavorite: false})
		this.props.deleteFavorite(id)
	}
	componentWillMount () {
		const {image, data} = this.props
		if (data['in_favorite']) {
			this.setState({
				activeFavorite: true
			})
		}
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
			props: {data, image, favorite, ratingCount, auth, deleteFavoriteItem},
			state: {loaderImage, activeFavorite},
			deleteFavorite, createNewFavorite
		} = this
		return (
			<Link
				to={`/device/${data.name.split(' ').join('-').split('/')[0]}/${data.id}`}
				styleName="deviceWrapper"
			>
				<div>
					<img
						styleName="deviceWrapper-image"
						alt="image"
						src={loaderImage ? Spinner : image}
					/>
				</div>
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
					<span styleName="rating">
						<span>Рейтинг продавца:</span>
						<Rating
							countRating={ratingCount}
						/>
					</span>
				</article>
				<Choose>
					<When
						condition={((data['in_favorite'] && activeFavorite) || activeFavorite) && auth}
					>
						<img
							src={heartFavorit}
							styleName="favorite"
							onClick={e => favorite ? deleteFavoriteItem(data.id, e) : deleteFavorite(e, data.id)}
						/>
					</When>
					<Otherwise>
						<img
							src={heart}
							styleName="favorite"
							onClick={e => { createNewFavorite(e, data.id) }}
						/>
					</Otherwise>
				</Choose>
			</Link>
		)
	}
}

ItemDevice.propTypes = {
	data: PropTypes.object,
	image: PropTypes.string,
	addToFavorite: PropTypes.func,
	deleteFavorite: PropTypes.func,
	deleteFavoriteItem: PropTypes.func,
	favorite: PropTypes.bool,
	ratingCount: PropTypes.number,
	auth: PropTypes.bool
}

export default ItemDevice
