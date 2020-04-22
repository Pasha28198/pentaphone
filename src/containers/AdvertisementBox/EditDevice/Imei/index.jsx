import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import { Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class EditDopInfoCheckBox extends Component {
	state = {activeImei: false}

	// allow entering only integers and watching for symbol's count
	onKeyPress = e => {
		const {length} = e.target.value
		const key = !/[0-9]/.test(String.fromCharCode(e.keyCode || e.which));

		(key || length > 14) && e.preventDefault()
	}

	// toombler for visible imei input pace
	onChangeImei = (e, data) => this.setState({activeImei: data.checked})

	// for change imei value in parent block
	onChangeImeiValue = (e) => this.props.changeCheckBox('serialNumber', e.target.value)

	render () {
		const { activeImei } = this.state

		return (
			<div styleName={
				activeImei
					? 'CheckList CheckList-active'
					: 'CheckList'
			}
			>

				<span styleName="CheckList-lable">IMEI</span>

				<div styleName="CheckList-item">
					<div
						styleName="CheckList-desc"
					>
						<Checkbox
							className="check"
							onChange={this.onChangeImei}
						/>
					</div>
					<div styleName="CheckList-leftSide">

						<span>
							Проверка IMEI подтвердит легальность телефона и повысит шансы на продажу.
						</span>

						<div
							styleName="CheckList-mob"
						>
                            IMEI
							<Checkbox
								toggle
								onChange={this.onChangeImei}
							/>
						</div>

						<div styleName={
							activeImei
								? 'CheckList-imeiActive'
								: 'CheckList-imeiActive CheckList-imeiDisable'
						}
						>
							<input
								onKeyPress={this.onKeyPress}
								onChange={this.onChangeImeiValue}
								type="text"
							/>
							<p>
                                Проверка IMEI подтвердит легальность
                                телефона и повысит шансы на продажу.
                                Поле не является обязательным.
							</p>
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
