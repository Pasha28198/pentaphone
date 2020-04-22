import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

import {mapStateToProps, mapActionsToProps} from './redux'

@connect(mapStateToProps, mapActionsToProps)

class Map extends Component {
	state={lat: null, lng: null}
	componentDidMount () {
		const geo = navigator.geolocation
		const {self} = this.props
		geo.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
			this.setState({lat, lng})
			const geocoder = new google.maps.Geocoder()
			geocoder.geocode(
				{location: {lat, lng}},
				results => {
					const {address_components: adressInfo} = results[0]
					const adress = adressInfo[2]['long_name'] + ' ' + adressInfo[1]['long_name']
					const city = adressInfo[4]['long_name']
					self.inp.value = adress || ''
					self.inpCity.value = city
					self.setState({geo: true})
				})
		})
	}
	render () {
		const {lat, lng} = this.state
		return (
			<Choose>
				<When condition={lat && lng}>
					<GoogleMap
						defaultZoom={17}
						defaultCenter={{ lat, lng }}
					>
						<Marker position={{ lat, lng }} />
					</GoogleMap>
				</When>
				<Otherwise>
					Загрузка....
				</Otherwise>
			</Choose>
		)
	}
}

Map.propTypes = {
	coords: PropTypes.object,
	self: PropTypes.obj,
	addAdress: PropTypes
}

export default withScriptjs(withGoogleMap(Map))
