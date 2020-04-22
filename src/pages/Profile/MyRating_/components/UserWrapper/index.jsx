import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import Catalog from '../Catalog'
import Comments from '../Comments'
import Tab from 'components/FunctionalityChunks/Tab'

import styles from './styles.scss'

const UserWrapper = ({feedbacks, items, pages, fetchItems, toomblerFavorite}) =>
	<div styleName='profileUser'>
		<Tab
			data={[
				{
					name: 'Товары',
					render: () => <Catalog {...{items, pages, fetchItems, toomblerFavorite}}/>
				},
				{
					name: 'Отзывы',
					render: () => <Comments {...{feedbacks}}/>
				}
			]}
		/>
	</div>

UserWrapper.propTypes = {
	feedbacks: PropTypes.array,
	items: PropTypes.object,
	pages: PropTypes.number,
	fetchItems: PropTypes.func,
	toomblerFavorite: PropTypes.func
}

export default CSSModules(UserWrapper, styles)
