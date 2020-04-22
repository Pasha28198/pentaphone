import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import List from './List'
import Spinner from 'src/components/Chunks/Spinner'
import getDataFromQuery from 'utills/catalog/generateObjFromQuery.js'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class DeviceResult extends Component {
	state={
		loading: false,
		query: false
	}

	componentWillMount () {
		const {models} = getDataFromQuery();
		(models) && this.setState({query: true})
	}
	componentDidMount () {
		// if query is empty add default image
		if (!this.state.query) {
			const img = new Image()
			img.src = this.props.mainImage
			img.onload = () => this.setState({ loading: true })
		}
	}
	componentWillReceiveProps (nxt) {
		// if query is'nt empty dont allow load default image
		// just spinner and image of model
		const {models} = getDataFromQuery()
		if (
			models &&
			this.props.mainImage !== nxt.mainImage
		) {
			const img = new Image()
			img.src = nxt.mainImage
			img.onload = () => this.setState({ loading: true })
		}
	}
	render () {
		const {
			props: {mainImage, deviceInfo, setStep},
			state: {loading}
		} = this
		return (
			<div styleName='deviceResult'>
				<div styleName = {deviceInfo.length > 0 ? 'selected true' : 'selected'}>
					<Choose>
						<When condition={loading}>
							<img src={mainImage} alt=""/>
						</When>
						<Otherwise>
							<Spinner/>
						</Otherwise>
					</Choose>
				</div>
				<List {...{setStep}}/>
			</div>
		)
	}
}

DeviceResult.propTypes = {
	deviceInfo: PropTypes.array,
	mainImage: PropTypes.string,
	setStep: PropTypes.func
}

export default DeviceResult
