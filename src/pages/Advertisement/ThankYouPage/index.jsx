import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TagManager from 'react-gtm-module'

import configs from 'utills/configs/config'
import letter from 'assets/svg/letterBack.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ThankYouPage extends Component {
	render () {
		const {pathname} = window.location
		const typeOfUrl = pathname.substr(21, pathname.length - 1)
		const {
			h1,
			description,
			linkInText,
			ps,
			advert,
			link,
			important,
			img
		} = configs[typeOfUrl] || {}

		// add user id to Google Tag Manager if thank you page is without checking
		typeOfUrl === 'noCheckToModal' && TagManager.dataLayer({dataLayer: this.props.user})
		return (
			<div className={styles.thankYouPage}>
				<div className={styles.wrapperContent}>
					<img src={img || letter} className={styles.letterIcon}/>
					<section>
						<p styleName="thYou">
							<span>Спасибо!</span><br/>
							{h1}
						</p>
						<p
							styleName="description"
						>
							{description + ' '}
							<If condition={linkInText}>
								<Link to={linkInText.to}>
									{linkInText.text}
								</Link>
							</If>
						</p>
						<If condition={ps}>
							<h2>
								<span>P.S. </span>
								{ps}
							</h2>
						</If>
						<If condition={advert}>
							<p styleName="advert">
								<span>{important && important}</span>
								{advert}
							</p>
						</If>
					</section>
					<If condition={link}>
						<div styleName="linksWrapper">
							<Link to={link.to}>
								<Button styleName='linkButton'>
									{link.text}
								</Button>
							</Link>
						</div>
					</If>
				</div>
			</div>
		)
	}
}

ThankYouPage.propTypes = {
	type: PropTypes.string,
	user: PropTypes.string
}

export default ThankYouPage
