import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import phone from 'assets/svg/iPhone6Preview.svg'
import configs from './configs'
import AdvertHeader from './components/AdvertHeader/index'
import AdvertBody from './components/AdvertBody/index'
import NoData from 'components/RootComponent/NoData'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class MyAdvertisments extends Component {
	componentDidMount () {
		const {auth, fetchAdvert} = this.props
		auth && fetchAdvert()
	}

	choseStatus = (advert) => {
		return configs[advert.status] &&
		configs[advert.status](
			advert.id,
			this.props.deactivate
		)
	}

	generateUrl = (a) => {
		return `/device/${
			a.name
				.split(' ')
				.join('-')
				.split('/')[0]}/${a.id}`
	}

	render () {
		const {
			data,
			delAdvertisment,
			titleHelmet
		} = this.props

		const wrapper = () => data && data.length > 0
			? 'containerWrapper'
			: 'containerWrapper white'

		return (
			<div styleName={wrapper()}>

				<Helmet>
					<title>{titleHelmet}</title>
					<link rel="canonical" href={`https://resell.com.ua/my-advertisments`} />
				</Helmet>

				<If condition={data}>
					<Choose>

						<When condition={data.length}>
							<For each='advert' index='i' of={data}>
								<div styleName="componentWrapper" >
									<AdvertHeader
										{...{
											status: advert.status,
											id: advert.id,
											deleteAdvertisment: delAdvertisment,
											create: advert['created_at'],
											number: advert['serial_number'] || 'Номер отсутствует'
										}}
									/>

									<Link to={this.generateUrl(advert)}>
										<AdvertBody
											{...{
												name: advert.name,
												price: advert.price,
												hitCount: advert['views'],
												image: advert.image ? advert.image : phone
											}}
										/>
									</Link>

									{this.choseStatus(advert)}

								</div>
							</For>
						</When>

						<Otherwise>
							<section styleName="absent">

								<NoData/>

								<Link to={'/sell/categories'}>
									<button>
										+ Добавить объявление
									</button>
								</Link>

							</section>
						</Otherwise>

					</Choose>
				</If>
			</div>
		)
	}
}

MyAdvertisments.propTypes = {
	fetchAdvert: PropTypes.func,
	removeOrder: PropTypes.func,
	auth: PropTypes.bool,
	data: PropTypes.array,
	deactivate: PropTypes.func,
	delAdvertisment: PropTypes.func,
	titleHelmet: PropTypes.string
}

export default MyAdvertisments
