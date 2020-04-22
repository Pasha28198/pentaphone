import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'

@CSSModules(styles, {allowMultiple: true})

class Category extends Component {
	render () {
		const {data, page} = this.props

		return (
			<Link
				styleName={`category ${data.slug === 'e-readers' ? 'disabled-link' : ''}`}
				to={`/${page}/${(data.slug)}`}
			>
				<img
					src={data.image}
					alt={data.name}
				/>
				{data.name}
			</Link>
		)
	}
}

Category.propTypes = {
	data: PropTypes.object,
	page: PropTypes.string
}

export default Category
