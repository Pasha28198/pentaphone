import React, {Component} from 'react'
import styles from './styles.scss'

import phones from 'assets/images/phones.png'


export default () =>

			<div className={styles.MyAdvertisement}>
				<img
					src={phones}
					alt="icons"
					className={styles['MyAdvertisement-image']}
				/>
				<div className={styles['MyAdvertisement-content']}>
					<h2>Мои обьявления (2)</h2>
					<ul className={styles['MyAdvertisement-list']}>
						<li>Apple iPhone 7</li>
						<li>Apple iPhone 8</li>
					</ul>
				</div>
			</div>

