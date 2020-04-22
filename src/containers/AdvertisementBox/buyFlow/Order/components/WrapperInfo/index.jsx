import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { reduxForm, FormSection } from 'redux-form'
import { Button } from 'semantic-ui-react'

// local components and files
import ContactInfo from 'src/containers/FormsBox/ContactInfo/index'
import PostLocation from 'src/containers/FormsBox/PostForm/index'
import Order100 from './components/Order100/index'
import Order300 from './components/Order300/index'
import Order600 from './components/Order600/index'
import EmailRegistr from 'containers/FormsBox/ExpressOrderRegistration/index'
import validate from './validate'

// decorators modules
import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

// decorators
@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'infoForTTN',
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})
@CSSModules(styles, {allowMultiple: true})

class WrapperInfo extends Component {
	render () {
		const {props: {handleSubmit, price, kind, fetch, fetchKind, auth}} = this
		return (
			<form onSubmit={handleSubmit}>
				<FormSection name='contactOrderInfo'>
					<ContactInfo/>
				</FormSection>

				<If condition={!auth}>
					<FormSection name='newEmail'>
						<EmailRegistr/>
					</FormSection>
				</If>
				<FormSection name="branchPost">
					<PostLocation/>
				</FormSection>
				<If condition={kind}>
					<If condition={+kind === 100}>
						<Order100 {...{price}}/>
					</If>
					<If condition={+kind === 300}>
						<Order300 {...{price, fetch, fetchKind}}/>
					</If>
					<If condition={+kind === 600}>
						<Order600 {...{price}}/>
					</If>
				</If>
				<div styleName="wrapperSearchPost">
					<Button
						type="submit"
						styleName={kind ? 'searchPost' : 'searchPost aprove'}
					>
						<Choose>
							<When condition={kind && +kind === 600}>Оформить заказ</When>
							<When condition={kind}>{'Оплатить'}</When>
							<Otherwise>{'Подтвердить'}</Otherwise>
						</Choose>
					</Button>
					<If condition={kind}>
						<Button
							styleName="searchPost"
							onClick={
								e => {
									e.preventDefault()
									window.history.back()
								}
							}
						>
							Отменить
						</Button>
					</If>
				</div>
			</form>
		)
	}
}

WrapperInfo.propTypes = {
	handleSubmit: PropTypes.func,
	price: PropTypes.object,
	ads: PropTypes.string,
	kind: PropTypes.number,
	phone: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	fetch: PropTypes.func,
	fetchKind: PropTypes.number,
	item: PropTypes.string,
	middleName: PropTypes.string,
	auth: PropTypes.bool
}

export default WrapperInfo
