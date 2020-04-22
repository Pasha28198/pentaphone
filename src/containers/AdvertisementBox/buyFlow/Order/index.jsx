import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import TagManager from 'react-gtm-module'

// local components
import error from './error'
import {s} from 'src/utills/functional.js'
import WrapperInfo from './components/WrapperInfo/index'
import Modal from 'containers/LayoutBox/Modal'
import PostVerify from 'components/FunctionalityChunks/PostVerify'
import generateJson from 'utills/generateObjForFastBuy.js'
import Spinner from 'src/components/Chunks/Spinner'

// decorators modules
import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class ContactInfoTTN extends Component {
	state={
		price: {
			price: 0,
			delivery: 0,
			total: 0,
			service: 0
		},
		kind: 100,
		modal: false,
		error: false
	}
	data = (values, prefix) => (
		{
			[`${prefix}_first_name`]: 'contactOrderInfo' in values ? values.contactOrderInfo.first_name : '',
			[`${prefix}_last_name`]: 'contactOrderInfo' in values ? values.contactOrderInfo.last_name : '',
			[`${prefix}_middle_name`]: 'contactOrderInfo' in values ? values.contactOrderInfo.middle_name : '',
			[`${prefix}_phone`]: 'contactOrderInfo' in values ? '+38' + values.contactOrderInfo.phone : '',
			[`${prefix}_shipment_city`]: 'branchPost' in values ? values.branchPost.shipment_city : this.props.shipCity || '',
			[`${prefix}_shipment_department`]: 'branchPost' in values ? (values.branchPost.shipment_department) : this.props.shipDepart || '',
			[`${prefix}_agrees`]: true
		}
	)
	verifyCode = code => {
		const {orderPaymentSeller: info, parentProps: {match: {params
		}}} = this.props
		if (code.length === 6) {
			this.props.verify(params.id, code)
				.then(({status}) => {
					if (s(status)) {
						this.setState({
							modal: false,
							error: false
						})
						info(params.id)
					}
				})
				.catch(() => this.setState({error: true}))
		} else {
			this.setState({error: true})
		}
	}
	sendDataSeller = (values) => {
		const {
			prefix, orderPaymentSeller: info,
			sendSellerData: send, parentProps: {match: {params}},
			toThYouPage
		} = this.props
		const type = window.location.hash.split('#')[1]
		return send(params.id, this.data(values, prefix))
			.then(({status, data}) => {
				if (!data['is_registered']) {
					this.setState({modal: true})
				} else {
					+type === 100 || +type === 600
						? s(status) && toThYouPage('orderChecked')
						: s(status) && info(params.id)
				}
			})
			.catch(({response: {data}}) => {
				error(data, prefix)
			})
	}
	sendDataBuyer = (values) => {
		const {auth, fastRegisterUser} = this.props

		// choose flow to create order depends on registration of user
		if (!auth) {
			const {newEmail: {email}} = values
			fastRegisterUser(email).then(() => this.sendData(values))
			localStorage.setItem('unregistrUserInfo', JSON.stringify(generateJson(values)))
		} else this.sendData(values)
	}
	sendData = (values) => {
		const {
			item, sendBuyerData: send,
			prefix, orderPaymentInfo: info,
			toThYouPage
		} = this.props

		// init data for order from redux form
		const data = this.data(values, prefix)
		data.item = item

		// send data
		return send(data, this.state.kind)
			.then(({status, data: {pk}}) => {
				// choose functional depends on status order
				+this.state.kind === 600
					? s(status) && toThYouPage('order600')
					: s(status) && info(pk)
			})
			.catch(({response: {data}}) => { error(data, prefix) })
	}
	fetchPrice = (kind) => {
		const {item, fetchPriceList, itemId} = this.props;

		(item || itemId) && fetchPriceList(item || itemId, kind)
			.then(({data: price}) => this.setState({kind, price}))
			.catch(({response}) => console.log(response))
	}
	componentWillMount () {
		const {parentProps, item, itemId, goBack} = this.props
		!item && !itemId && goBack()
		this.setState({kind: parentProps.match.params.kind})
	}
	componentDidMount () {
		const {
			fetchCity,
			parentProps: {match: {params}}
		} = this.props

		fetchCity()
		this.fetchPrice(params.kind)
	}
	componentWillUnmount () { this.props.clearAds() }
	render () {
		const {
			props: {item, parentProps: {match: {params}}, titleHelmet, user, auth},
			state: {price, error, kind}, fetchPrice
		} = this
		// add user id to Google Tag Manager for watching clicks from one user to the same item
		TagManager.dataLayer({dataLayer: item + user})
		return (
			<div>
				<Helmet>
					<title>{titleHelmet}</title>
					<link rel="canonical" href={`https://resell.com.ua/order/${kind}/contact-info`} />
				</Helmet>
				<Choose>
					<When condition={price['item_price']}>
						<div
							styleName={auth ? 'ContactInfo' : 'ContactInfo padding'}
						>
							<WrapperInfo
								ref={info => { this.info = info }}
								onSubmit={
									!params.kind
										? this.sendDataSeller
										: this.sendDataBuyer
								}
								price={price}
								ads={params.kind}
								kind={params.kind}
								fetch={fetchPrice}
								fetchKind={+kind}
								item={item}
								auth={auth}
							/>
						</div>
					</When>
					<Otherwise>
						<Spinner/>
					</Otherwise>
				</Choose>

				<Modal
					status={this.state.modal}
					onClick={() => this.setState({modal: false})}
				>
					<PostVerify error={error} verify={this.verifyCode}/>
				</Modal>
			</div>
		)
	}
}

ContactInfoTTN.propTypes = {
	fetchCity: PropTypes.func,
	sendBuyerData: PropTypes.func,
	data: PropTypes.object,
	item: PropTypes.string,
	toHome: PropTypes.func,
	parentProps: PropTypes.object,
	sendSellerData: PropTypes.func,
	orderPaymentInfo: PropTypes.func,
	fetchPriceList: PropTypes.func,
	orderPaymentSeller: PropTypes.func,
	clearAds: PropTypes.func,
	prefix: PropTypes.func,
	verify: PropTypes.func,
	idSeller: PropTypes.string,
	titleHelmet: PropTypes.string,
	values: PropTypes.object,
	shipDepart: PropTypes.number,
	shipCity: PropTypes.number,
	user: PropTypes.string,
	toThYouPage: PropTypes.func,
	auth: PropTypes.bool,
	fastRegisterUser: PropTypes.func,
	itemId: PropTypes.string,
	goBack: PropTypes.func
}

export default ContactInfoTTN
