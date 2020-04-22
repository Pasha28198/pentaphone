import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import SampleBlock from './components/SampleBlock'
import styles from './styles.scss'

@CSSModules(styles)

class EditDopInfoSampleBlock extends Component {
	render () {
		const {
			changeDopInfo,
			visualCondition,
			condition,
			details
		} = this.props
		return (
			<div styleName="SampleBlock">

				<div styleName="SampleBlock-item">
					<span>Cостояние</span>
					<div styleName="SampleBlock-itemChose">
						<SampleBlock
							cangeConditional={(value) => { changeDopInfo('condition', value) }}
							visualCondition={condition}
							data={[
								{
									value: 'Новый',
									pk: 100
								},
								{
									value: 'Б/У',
									pk: 200
								},
								{
									value: 'Refurbished',
									pk: 400
								}
							]}
						/>
					</div>
				</div>
				<If condition={condition !== 100 && condition !== 400}>
					<div styleName="SampleBlock-item">
						<span>Внешнее состояние</span>
						<div styleName="SampleBlock-itemChose">
							<SampleBlock
								cangeConditional={(value) => { changeDopInfo('visualCondition', value) }}
								visualCondition={visualCondition}
								data={[
									{
										value: 'Отличное',
										pk: 100
									},
									{
										value: 'Хорошее',
										pk: 200
									},
									{
										value: 'Среднее',
										pk: 300
									}
								]}
							/>
						</div>
					</div>
				</If>

				<div styleName="SampleBlock-item">
					<span>Описание</span>
					<textarea
						value={details}
						onChange={(e) => { this.props.changeDopInfo('details', e.target.value) }}
						maxLength="3000"
						placeholder="Расскажите про свой телефон и это поможет его продать"
						styleName="SampleBlock-desc"
					/>
				</div>

			</div>
		)
	}
}

EditDopInfoSampleBlock.propTypes = {
	changeDopInfo: PropTypes.func,
	visualCondition: PropTypes.number,
	condition: PropTypes.number,
	details: PropTypes.string
}

export default EditDopInfoSampleBlock
