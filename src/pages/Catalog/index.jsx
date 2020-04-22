import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Card from 'src/components/Chunks/Card'
import SearchI from 'src/assets/images/Path.png'
import Search from 'src/components/RootComponent/SearchBlock'
import InfinityPagination from 'src/components/FunctionalityChunks/InfinityPagination'
import MainFilterToolBar from 'src/containers/CatalogElements/MainFilterToolBar'
import { Link } from 'react-router-dom'
import { parseFilterInQuery } from 'src/utills/catalog/generateFilter.js'
import { priceFormat } from 'src/utills/functional'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Catalog extends Component {
	state = {
		// for fetch top models local
		topModels: {},

		//   for menu. work only on mobile and tablet
		activeSearch: false,

		// for visible button redirect to sell/:type (sell flow)
		activeSellFastBtn: false
	}

	// show search payce
	openSearch = () => { this.setState({activeSearch: true}) }

	// close search payce
	closeSearch = () => { this.setState({activeSearch: false}) }

	componentDidMount () {
		const {location: {search}, match: {params}} = this.props.parentProps
		console.log('hi')
		this.props.setFilters(parseFilterInQuery(search, params.type))
	}

	componentWillUnmount () { this.props.cleanCatalog() }

	render () {
		const {
			pages, items,
			getItems, count,
			toomblerFavorite,
			headerFiltered
		} = this.props
		return (
			<div styleName="Catalog">
				<div styleName={this.state.activeSearch ? 'Search activeSearch' : 'Search'}>
					<Search
						closeSearch={this.closeSearch}
					/>
				</div>
				<h2>Купить {headerFiltered}</h2>
				<span>{priceFormat(+count)} результатов</span>
				<MainFilterToolBar/>
				<InfinityPagination
					pagesCount={pages}
					nextData={getItems}
				>
					<For each="item" index='index' of={items}>
						<a
							href={`/device/${item.nameCard.split(' ').join('_')}/${item.id}`}
							key={index}
						>
							<Card
								{ ...item }
								toomblerFavorite={ () => toomblerFavorite(item.inFavorit, item.id) }
							/>
						</a>
					</For>
				</InfinityPagination>
				<img
					onClick={this.openSearch}
					styleName="searchBtn"
					src={SearchI}
					alt="search"
				/>
			</div>
		)
	}
}

Catalog.propTypes = {
	getItems: PropTypes.func,
	setFilters: PropTypes.func,
	cleanCatalog: PropTypes.func,
	toomblerFavorite: PropTypes.func,
	headerFiltered: PropTypes.string,
	pages: PropTypes.number,
	count: PropTypes.number,
	items: PropTypes.array,
	parentProps: PropTypes.object
}

Catalog.defaultProps = {items: []}

export default Catalog
