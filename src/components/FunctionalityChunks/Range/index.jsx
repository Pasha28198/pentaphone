import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import Slider from 'react-rangeslider'
import './range.css'

@CSSModules(styles)

class Range extends Component {
	state = {value: 8000}
    onChange = value => { this.setState({value}) }
	render () {
		const {state:{value},onChange} = this
		return (
			<div styleName="Range">
				<Slider {...{min:6000,max:25000,step:1000,value,onChange}}/>
			</div>
		)
	}
}

export default Range
