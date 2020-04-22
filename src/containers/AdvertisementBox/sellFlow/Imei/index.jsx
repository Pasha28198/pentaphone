import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import { Checkbox, Popup } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import info from 'src/assets/info.svg'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class EditDopInfoCheckBox extends Component {
	state = {
		activeImei: false
	}
	// allow entering only integers and watching for symbol's count
	onKeyPress = e => {
		const {length} = e.target.value
		const key = !/[0-9]/.test(String.fromCharCode(e.keyCode || e.which));
		(key || length > 14) && e.preventDefault()
	}

	onChangeImei = (e, data) => this.setState({activeImei: data.checked})
	onChangeImeiValue = e => { this.props.setImey(e.target.value) }
	render () {
		const {state: {activeImei}, props: {error}} = this
		return (
			<div styleName={activeImei ? 'CheckList CheckList-active' : 'CheckList'}>
				<div
					styleName="CheckList-item"
					ref={inp => (this.inp = inp)}
				>
					<span styleName="CheckList-lable">
						IMEI
						<Popup
							trigger={
								<img
									src={info}
									alt="info"
									styleName="Imei-infoDesc"
								/>
							}
						>
							<span styleName="popUp">
									IMEI состоит из 15 цифр и уникален для каждого устройства. Его можно найти на коробке от смартфона или узнать по комбинации *#06#
							</span>
						</Popup>
					</span>
					<div
						styleName="CheckList-desc"
					>
						<input
							onKeyPress={this.onKeyPress}
							onChange={this.onChangeImeiValue}
							type="text"
							placeholder="Проверка IMEI подтвердит легальность"
						/>
						<If condition={error}>
							<span styleName="error">{error}</span>
						</If>
					</div>
					<div
						styleName="CheckList-mob"
						ref = {inp => (this.inpMob = inp)}
					>
						<span>
							IMEI
							<Popup
								trigger={
									<img
										src={info}
										alt="info"
										styleName="Imei-infoDesc"
									/>
								}
							>
								<span styleName="popUp">
									IMEI состоит из 15 цифр и уникален для каждого устройства. Его можно найти на коробке от смартфона или узнать по комбинации *#06#
								</span>
							</Popup>
						</span>
						<Checkbox
							toggle
							onChange={this.onChangeImei}
						/>
					</div>
				</div>
				<div styleName={activeImei ? 'CheckList-imeiActive' : 'CheckList-imeiActive CheckList-imeiDisable'}>
					<input
						onKeyPress={this.onKeyPress}
						onChange={this.onChangeImeiValue}
						type="text"
					/>
					<p>
						<If condition={error}>
							<span styleName="error">{error}</span>
						</If>
						Проверка IMEI подтвердит легальность
						телефона и повысит шансы на продажу.
						Поле не является обязательным.
					</p>
				</div>
			</div>
		)
	}
}

EditDopInfoCheckBox.propTypes = {
	value: PropTypes.object,
	changeCheckBox: PropTypes.func,
	setImey: PropTypes.func,
	error: PropTypes.string
}

export default EditDopInfoCheckBox
