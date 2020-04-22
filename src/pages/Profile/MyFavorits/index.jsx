import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Card from 'src/components/Chunks/Card'
import InfinityPagination from 'src/components/FunctionalityChunks/InfinityPagination'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Favorites extends Component {
	componentDidMount () { this.props.getItems() }
	componentWillUnmount () { this.props.cleanFavorites() }

	render () {
		const {
			items, pages, nextPage,
			deleteFavorite
		} = this.props

		return (
			<div styleName="favorits">

				<Helmet>
					<title>Избранные</title>
					<link rel="canonical" href={`https://resell.com.ua/favorites`} />
				</Helmet>

				<div styleName="listDeviceWrapper">
					<InfinityPagination
						pagesCount={pages}
						nextData={nextPage}
					>
						<For each="item" index='index' of={items}>
							<Link
								to={`/device/${item.nameCard.split('/').join('_')}/${item.id}`}
								key={index}
							>
								<Card
									{ ...item }
									toomblerFavorite={ () => deleteFavorite(item.id) }
								/>
							</Link>
						</For>
					</InfinityPagination>
				</div>

			</div>
		)
	}
}

Favorites.propTypes = {
	getItems: PropTypes.func,
	items: PropTypes.array,
	cleanFavorites: PropTypes.func,
	nextPage: PropTypes.func,
	deleteFavorite: PropTypes.func,
	pages: PropTypes.number
}

export default Favorites
