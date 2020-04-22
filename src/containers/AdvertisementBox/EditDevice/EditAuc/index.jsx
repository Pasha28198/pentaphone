import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

import Auc from 'pages/Advertisement/CreatingDetailsBergain/components/PriceBlock'
import styles from './styles.scss'

@CSSModules(styles)

class EditDopInfoSampleBlock extends Component {
	state={
		visibleAuc: false
	}
	onChange = (e, data) => {
		this.setState({visibleAuc: data.checked})
		this.props.changePrice('isBet', data.checked)
	}
	changeValue = (min, max) => {
		this.props.changePrice('price', max)
		this.props.changePrice('startPrice', min)
	}
	render () {
		return (
			<div styleName="AucWrapper">
				<div styleName="Auc">
					<span>Аукцион</span>
					<div
						styleName="AucWrapper-desc"
					>
						<Checkbox
							className='check'
							checked={this.props.isBet}
							onChange={this.onChange}
						/>
						<span>Я согласен выставить на аукцион</span>
					</div>
					<div
						styleName="AucWrapper-mob"
					>
						<Checkbox
							checked={this.props.isBet}
							toggle
							onChange={this.onChange}
						/>
					</div>
				</div>
				{ this.state.visibleAuc &&
					<Auc
						value={{
							min: +this.props.startPrice || 0,
							max: +this.props.price
						}}
						changeValue={this.changeValue}
					/>
				}
			</div>
		)
	}
}

EditDopInfoSampleBlock.propTypes = {
	changePrice: PropTypes.func,
	startPrice: PropTypes.number,
	price: PropTypes.number,
	isBet: PropTypes.bool
}

export default EditDopInfoSampleBlock
