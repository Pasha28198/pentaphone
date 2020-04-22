import React from 'react'

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
		<article>
			<section className={styles.columnWrapper}>
				<For each='configs' index='i' of={configs}>
					<div key={i}>
						<h2>{configs.label}</h2>
						<For each='list' of={configs.list}>
							<Choose>
								<When condition={list.link}>
									<Link key={++i} {...{to: list.href, target: '_blank'}}>{list.content}</Link>
								</When>
								<Otherwise>
									<a key={++i} {...{href: list.href, target: '_blank'}}>{list.content}</a>
								</Otherwise>
							</Choose>
						</For>
					</div>
				</For>
				<div>
					<img src={visa} alt=""/>
					<img src={MasterCard} alt=""/>
				</div>
			</section>
			<section className={styles.downPart}>
				<div>
					<img src={logoGray} alt=""/>
					<span>ReSell</span>
				</div>
				<div>
					<p>
						<Link to="/confidential">
							Отказ от ответственности <br/>
							Пользовательское соглашение
						</Link>
					</p>
					<div>
						<a>
							<img src={facebook} alt=""/>
						</a>
						<a>
							<img src={twitter} alt=""/>
						</a>
						<a>
							<img src={insta} alt=""/>
						</a>
					</div>
				</div>
			</section>
		</article>
	</footer>
