import React, { Component } from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

class Timer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
		this.setTimer = this.setTimer.bind(this)
	}
	setTimer () {
		let countDownDate = new Date('Jun 5, 2020 15:37:25').getTime()
		let x = setInterval(() => {
			let now = new Date().getTime()

			let distance = countDownDate - now

			let days = Math.floor(distance / (1000 * 60 * 60 * 24))
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			let seconds = Math.floor((distance % (1000 * 60)) / 1000)

			if (distance < 0) {
				clearInterval(x)
			}
			this.setState({days, hours, minutes, seconds})
		}, 1000)
	}
	componentDidMount () {
		this.setTimer()
	}

	render () {
		const {days, hours, minutes, seconds} = this.state
		const slider = this.props.isInSlider
		return (
			<div className={slider ? styles.timerContSlider : styles.timerCont} >
				<div className={styles.timer} style={slider ? {boxShadow: 'none'} : null}>
					<div className={styles.day}>
						<span className={slider ? styles.spanSlider : null} >{days < 10 ? `0${days}` : days}</span>
						<div className={slider ? styles.formatSlider : styles.format}>Day</div>
					</div>
					<div className={styles.separator}>/</div>
					<div className={styles.hours}>
						<span className={slider ? styles.spanSlider : null} >{hours < 10 ? `0${hours}` : hours}</span>
						<div className={slider ? styles.formatSlider : styles.format}>Hours</div>
					</div>
					<div className={styles.separator}>/</div>
					<div className={styles.min}>
						<span className={slider ? styles.spanSlider : null} >{minutes < 10 ? `0${minutes}` : minutes}</span>
						<div className={slider ? styles.formatSlider : styles.format}>Minutes</div>
					</div>
					<div className={styles.separator}>/</div>
					<div className={styles.sec}>
						<span className={slider ? styles.spanSlider : null} >{seconds < 10 ? `0${seconds}` : seconds}</span>
						<div className={slider ? styles.formatSlider : styles.format}>Secounds</div>
					</div>
				</div>
			</div>
		)
	}
}
Timer.propTypes = {
	isInSlider: PropTypes.bool
}
export default Timer
