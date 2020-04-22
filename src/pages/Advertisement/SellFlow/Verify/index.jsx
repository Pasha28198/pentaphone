import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import chekedSmall from 'assets/svg/check.svg'
import checked from 'assets/svg/checking.svg'
import Modal from 'containers/LayoutBox/Modal'
import ModalChild from 'components/ModalWindow/ModalChild'

import './style.css'
import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Verify extends Component {
	state={
		isModal: false,
		data: '',
		count: 0
	}
	onClick = () => {
		this.props.patchBargain({'is_review': true}, this.props.id)
		this.setState({
			data: 'agreeWithCheck'
		})
		this.props.nextPage()
	}
	componentDidMount () {
		const {redirectToCategories, id} = this.props
		window.scrollTo(0, 0)
		!id && redirectToCategories()
	}
	render () {
		const {onClick} = this
		return (
			<div styleName="verify" className='sliderVerify'>
				<Helmet>
					<title>{this.props.titleHelmet}</title>
					<link rel="canonical" href={`https://resell.com.ua/sell/verify`} />
				</Helmet>
				<h3>Получите статус «Проверено»</h3>
				<div styleName="verify-slider">
					<div styleName="verify-slider--item">
						<div styleName={'wrap'}>
							<img styleName="check" src={chekedSmall} alt=""/>
							<img src={checked} alt="image"/>
						</div>
						<div>
							C проверкой от ReSell вы сможете продать телефон дороже. Проверенное устройство получит специальную отметку и гарантию. Большинство покупателей выбирают именно такие объявления.
						</div>
					</div>
				</div>
				<button {...{styleName: 'buttonConfirm', onClick}}>
					Согласиться на проверку
				</button>
				<button
					onClick={() =>
						this.props.nextPage()
					}
					styleName="buttonConfirm--cancle"
				>
					Отказаться от проверки
				</button>
				<Modal
					status={this.state.isModal}
					onClick={() => this.props.nextPage()}
				>
					<ModalChild
						status={this.state.isModal}
						data='refuseToCheck'
						onClick={() => {
							this.setState({isModal: false})
							if (this.state.count) {
								setTimeout(() => { this.props.nextPage() }, 300)
							} else {
								this.setState({count: 1})
							}
						}}
					/>
				</Modal>
			</div>
		)
	}
}

Verify.propTypes = {
	patchBargain: PropTypes.func,
	id: PropTypes.string,
	titleHelmet: PropTypes.string,
	nextPage: PropTypes.func,
	redirectToCategories: PropTypes.func
}

export default Verify
