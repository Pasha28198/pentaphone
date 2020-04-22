import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Checkbox, Popup } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import info from 'src/assets/info.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import './semantic.css'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class EditDopInfoCheckBox extends Component {
	state = {
		activeImei: false
	}
	onChange = (e, data, value) => {
		if (value === 'isOwner') {
			this.props.setOwner(data.checked)
		} else if (value === 'isReview') {
			this.props.setBargain(data.checked)
		} else {
			this.props.setWarranty(data.checked)
		}
	}
	render () {
		return (
			<div styleName="CheckList-wrapper">
				<div styleName="CheckList-lable">
                    Дополнительно
				</div>
				<div styleName="CheckList">
					<div styleName="CheckList-item">
						<div
							styleName="CheckList-desc"
						>
							<Checkbox
								className="check"
								onChange={(e, data) => { this.onChange(e, data, 'isOwner') }}
							/>
						</div>
                        Первый владелец
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
								toggle
								onChange={(e, data) => { this.onChange(e, data, 'isOwner') }}
							/>
						</div>
					</div>
					<div styleName="CheckList-item">
						<div
							styleName="CheckList-desc"
						>
							<Checkbox
								className="check"
								onChange={(e, data) => { this.onChange(e, data, 'isReview') }}
							/>
						</div>
						<span>
							Торг
							<Popup
								trigger={
									<img
										src={info}
										alt="info"
										styleName="Imei-infoDesc"
									/>
								}
							>
								<span className="popUp">
									Если вы не готовы торговаться, мы отметим это в объявлении. Также объявление будет закрыто для комментирования.
								</span>
							</Popup>
						</span>
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
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
								onChange={(e, data) => { this.onChange(e, data, 'isWarranty') }}
							/>
						</div>
                        Есть гарантия
						<div
							styleName="CheckList-mob"
						>
							<Checkbox
								toggle
								onChange={(e, data) => { this.onChange(e, data, 'isWarranty') }}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

EditDopInfoCheckBox.propTypes = {
	setBargain: PropTypes.func,
	setWarranty: PropTypes.func,
	setOwner: PropTypes.func
}

export default EditDopInfoCheckBox
