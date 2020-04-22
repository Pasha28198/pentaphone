import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import InfinityPagination from 'src/components/FunctionalityChunks/InfinityPagination'
import Card from 'src/components/Chunks/Card'

// import styles from './styles.scss'

const Catalog = ({items, pages, fetchItems, toomblerFavorite}) =>
	<div>
		<InfinityPagination
			pagesCount={pages}
			nextData={fetchItems}
		>
			<For each="item" index='index' of={items}>
				<Link
					to={`/device/${item.nameCard.split(' ').join('_')}/${item.id}`}
					key={index}
				>
					<Card
						{ ...item }
						toomblerFavorite={ () => toomblerFavorite(item.inFavorit, item.id) }
					/>
				</Link>
			</For>
		</InfinityPagination>
	</div>

Catalog.propTypes = {
	results: PropTypes.array,
	pages: PropTypes.number,
	count: PropTypes.number,
	items: PropTypes.array,
	fetchItems: PropTypes.func,
	toomblerFavorite: PropTypes.func
}

export default Catalog
