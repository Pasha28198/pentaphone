import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import { Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import './semantic.css'

@CSSModules(styles, {allowMultiple: true})

class EditDopInfoCheckBox extends Component {
	state = {
		activeImei: false
	}

	// toombler for visible imei field
	onChangeImei = (e, data) => {
		this.setState({activeImei: data.checked})
	}

	onChange = (e, data, value) => {
		this.props.changeCheckBox(value, data.checked)
	}

	onChangeImeiValue = (e) => {
		this.props.changeCheckBox('serialNumber', e.target.value)
	}

	render () {
		return (
			<div styleName="CheckList">

				<div styleName="CheckList-group">Дополнительно</div>

				<div styleName="CheckList-items">
					<div styleName="CheckList-item">
						<div
							styleName="CheckList-desc"
						>
							<Checkbox
								className="check"
								checked={this.props.value.isReview}
								onChange={(e, data) => { this.onChange(e, data, 'isReview') }}
							/>
						</div>
                        С проверкой
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
								checked={this.props.value.isReview}
								toggle
								onChange={(e, data) => { this.onChange(e, data, 'isReview') }}
							/>
						</div>
					</div>
					<div styleName="CheckList-item">
						<div
							styleName="CheckList-desc"
						>
							<Checkbox
								className="check"
								checked={this.props.value.isWarranty}
								onChange={(e, data) => { this.onChange(e, data, 'isWarranty') }}
							/>
						</div>
                        Есть гарантия
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
								checked={this.props.value.isWarranty}
								toggle
								onChange={(e, data) => { this.onChange(e, data, 'isWarranty') }}
							/>
						</div>
					</div>
					<div styleName="CheckList-item">
						<div
							styleName="CheckList-desc"
						>
							<Checkbox
								className="check"
								checked={this.props.value.isOwner}
								onChange={(e, data) => { this.onChange(e, data, 'isOwner') }}
							/>
						</div>
                        Первый владелец
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
								checked={this.props.value.isOwner}
								toggle
								onChange={(e, data) => { this.onChange(e, data, 'isOwner') }}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

EditDopInfoCheckBox.propTypes = {
	value: PropTypes.object,
	changeCheckBox: PropTypes.func
}

export default EditDopInfoCheckBox
