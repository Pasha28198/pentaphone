import React from 'react'
import skype from 'assets/footer/skype.svg'
import phone from 'assets/footer/phone-call.svg'
import mail from 'assets/footer/mail.svg'
import linkImg from 'assets/footer/linkImg.jpg'
import bankCards from 'assets/footer/bank_cards.png'

import configs from './configs'
import visa from 'assets/svg/visa.svg'
import MasterCard from 'assets/svg/MasterCard.svg'
import logoGray from 'assets/svg/logoGray.svg'
import facebook from 'assets/svg/grayFacebook.svg'
import insta from 'assets/svg/grayInsta.svg'
import twitter from 'assets/svg/grayTwitt.svg'
import {Link} from 'react-router-dom'

import styles from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhoneAlt, faSms } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

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
		<div className={styles.footerMain}>
			<div>
				<h5>My account</h5>
				<ul>
					<li><a>Shop</a></li>
					<li><a>Cart</a></li>
					<li><a>About Us</a></li>
					<li><a>Contact Us</a></li>
					<li><a>Coming Soon</a></li>
				</ul>
			</div>
			<div>
				<h5>Customer Services</h5>
				<ul>
					<li><a>Home</a></li>
					<li><a>Blog</a></li>
					<li><a>Wishlist</a></li>
					<li><a>Compare</a></li>
					<li><a>Portfolio</a></li>
				</ul>
			</div>
			<div>
				<h5>Quick Contact</h5>
				<form>
					<input type='text' placeholder='Enter your E-mail'/>
					<textarea placeholder='Write your review'/>
					<button>send message</button>
				</form>
			</div>
			<div>
				<h5>Special offers</h5>
				<a><img src={linkImg} alt=''/></a>
			</div>
			<div className={styles.footerContacts}>
				<h5>Contacts</h5>
				<ul>
					<li><div><FontAwesomeIcon icon={faMapPin} /></div>445 Mount Eden Road</li>
					<li><div><FontAwesomeIcon icon={faPhoneAlt} /></div>878 - 3853 - 9576</li>
					<li><div><FontAwesomeIcon icon={faSms} /></div>878 - 0505 - 0440</li>
					<li><div><FontAwesomeIcon icon={faEnvelope} /></div>shopelab@gmail.com</li>
				</ul>
			</div>
		</div>
		<div className={styles.footerBottomBar}>
			<p>Copyright © 2020. eLab WordPress Theme by StylemixThemes</p>
			<img src={bankCards} alt=''/>
		</div>
	</footer>
