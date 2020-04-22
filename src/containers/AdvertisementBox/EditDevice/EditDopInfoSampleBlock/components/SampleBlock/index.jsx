import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class SampleBlock extends Component {
	generateStyleName = (item, v) => v === item.pk ? 'SampleBlock-item SampleBlock-itemActive' : 'SampleBlock-item'

	render () {
		const {
			data, visualCondition: v,
			cangeConditional
		} = this.props

		return (

			<div styleName="SampleBlock">
				{
					data.map((item, index) => {
						return (
							<div
								styleName={this.generateStyleName(item, v)}
								key={index}
								onClick={() => cangeConditional(item.pk)}
							>
								{item.value}
							</div>
						)
					})
				}
			</div>

		)
	}
}

SampleBlock.propTypes = {
	data: PropTypes.array,
	cangeConditional: PropTypes.func,
	visualCondition: PropTypes.number
}

SampleBlock.defaultProps = {
	data: []
}

export default SampleBlock
