import React from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import pushQuery from 'src/utills/catalog/pushQuery.js'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

const Block = ({
	item, clearDopInfo, setStep, getModels, getBrands,
	index, clearInfo, brands, models, cureentPosition
}) => {
	// action to click on block
	const onClick = () => {
		// clear info when we return to previous step
		// and set active state
		clearDopInfo(index)
		setStep(item.key)
		clearInfo(item.key, cureentPosition);

		// if we return to step brands clear query
		(item.key === 'brands') && pushQuery('')

		// if we return to step model put query with name of brand
		if (item.key === 'model') {
			const query = window.location.search && window.location.search.substring(1).split('&')
			pushQuery(`?${query[0]}`)
		}

		// if brands is empty in redux we need to fetch ones to render view in sample block
		(!brands.length) && getBrands();

		// if models is empty in redux we need to fetch ones to render view in sample
		(!models.length && !brands.length) && getModels(item.brand)
	}
	return (
		<div {...{styleName: 'block', onClick}}>
			{item.name}
		</div>
	)
}

Block.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number,
	clearDopInfo: PropTypes.func,
	setStep: PropTypes.func,
	clearInfo: PropTypes.func,
	brands: PropTypes.array,
	getBrands: PropTypes.func,
	models: PropTypes.array,
	cureentPosition: PropTypes.string,
	getModels: PropTypes.func
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(CSSModules(Block, styles))
