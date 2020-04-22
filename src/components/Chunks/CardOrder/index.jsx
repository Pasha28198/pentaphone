import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import Check from 'src/components/Chunks/Сheck'

import styles from './styles.scss'

class Card extends Component {
	render () {
		const {
			props: {
				time, number,
				textFieldName,
				textFieldDescription,
				check, status, img, idItem
			}
		} = this

		return (
			<div
				styleName="CardORrder"
			>
				<div styleName="CardORrder-info">
					<p>Время заказа: <span>{time}</span></p>
					<p>Номер заказа: <span>{number}</span></p>
				</div>
				<div styleName="CardORrder-lable">
					<img src={img} alt="label"/>
					<a href={`/device/${textFieldName.split('/').join('|')}/${idItem}`}>{textFieldName}</a>
					<p>{textFieldDescription}</p>
				</div>
				<Check data={check}/>
				<div styleName="CardORrder-staus">
					{status}
				</div>
			</div>
		)
	}
}

Card.propTypes = {
	idItem: PropTypes.string,
	img: PropTypes.string,
	time: PropTypes.string.isRequire,
	number: PropTypes.number.isRequire,
	textFieldName: PropTypes.string.isRequire,
	textFieldDescription: PropTypes.string,
	check: PropTypes.object,
	status: PropTypes.node
}

Card.defaultProps = {
	time: '',
	number: '',
	textFieldName: '',
	textFieldDescription: '',
	check: {}
}

export default CSSModules(styles)(Card)
