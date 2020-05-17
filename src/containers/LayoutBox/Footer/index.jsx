import React from 'react'
import skype from 'assets/footer/skype.svg'
import phone from 'assets/footer/phone-call.svg'
import mail from 'assets/footer/mail.svg'

import configs from './configs'
import visa from 'assets/svg/visa.svg'
import MasterCard from 'assets/svg/MasterCard.svg'
import logoGray from 'assets/svg/logoGray.svg'
import facebook from 'assets/svg/grayFacebook.svg'
import insta from 'assets/svg/grayInsta.svg'
import twitter from 'assets/svg/grayTwitt.svg'
import {Link} from 'react-router-dom'

import styles from './styles.scss'

export default () =>
	<footer className={styles.footerWrapper}>
		<div className={styles.footerTopBar}>
			<div className={styles.container}>
				<div className={styles.contactsContainer}>
					<div className={styles.contactsItem}>
						<img src={skype} alt=''/>
						<div>
							<h6>Skype</h6>
							<p>@skype_login</p>
						</div>
					</div>
					<div className={styles.contactsItem}>
						<img src={phone} alt=''/>
						<div>
							<h6>info-line</h6>
							<p>0-800-999-23</p>
						</div>
					</div>
					<div className={styles.contactsItem}>
						<img src={mail} alt=''/>
						<div>
							<h6>email</h6>
							<p>emeil@mail.com</p>
						</div>
					</div>
				</div>
				<form className={styles.subscribeForm}>
					<input type='text' placeholder='Enter your email to subscribe' ></input>
					<button type='submit'>Subscribe</button>
				</form>
			</div>
		</div>
	</footer>
