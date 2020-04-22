import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import home from 'assets/icons/menu/icon.svg'
import star from 'assets/icons/menu/star.svg'
import heart from 'assets/icons/menu/favorite-heart-button.svg'
import news from 'assets/icons/menu/newspaper.svg'
import sale from 'assets/icons/menu/sale-tag.svg'
import purse from 'assets/icons/menu/shopping-purse-icon.svg'
import logout from 'assets/svg/logout.svg'
import subtract from 'assets/svg/Subtract.svg'
import evaluate from 'src/assets/icons/menu/price.svg'
import publ from 'src/assets/icons/menu/public.svg'
import phone from 'src/assets/icons/menu/phone.svg'
import mail from 'src/assets/icons/menu/mail.svg'
// import auc from 'src/assets/icons/menu/auct.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Nav extends Component {
	render () {
		const {close, auth, logOut} = this.props
		return (
			<div styleName="navWrapper">
				<Link
					onClick={close}
					styleName="navWrapper-block"
					to={`/`}
				>
					<span>
						<img src={home} alt="home"/>
					</span>
                    Главная
				</Link>
				<If condition={auth}>
					<Link
						onClick={close}
						to={`/my-advertisments`}
						styleName="navWrapper-block"
					>
						<span>
							<img
								src={subtract}
								alt="heart"
								styleName="favoriteClass"
							/>
						</span>
                        Объявления
					</Link>
					<Link
						onClick={close}
						to={`/my-sales`}
						styleName="navWrapper-block"
					>
						<span>
							<img
								src={sale}
								alt="heart"
								styleName="favoriteClass"
							/>
						</span>
                        Продажи
					</Link>
					<Link
						onClick={close}
						to={`/my-buys`}
						styleName="navWrapper-block"
					>
						<span>
							<img src={purse} alt="chat"/>
						</span>
                        Покупки
					</Link>
					<Link
						onClick={close}
						to={`/my-rating`}
						styleName="navWrapper-block"
					>
						<span>
							<img src={star} alt="megaphone"/>
						</span>
                        Профиль
					</Link>
				</If>
				<Link
					onClick={close}
					styleName="navWrapper-block"
					to={`/sell/categories`}
				>
					<span>
						<img src={evaluate} alt="home"/>
					</span>
                    Оценить
				</Link>
				<Link
					onClick={close}
					styleName="navWrapper-block"
					to={`/sell/categories`}
				>
					<span>
						<img src={publ} alt="home"/>
					</span>
                    Продать
				</Link>
				<Link
					onClick={close}
					to={`/favorites`}
					styleName="navWrapper-block"
				>
					<span>
						<img src={heart} alt="megaphone"/>
					</span>
                    Избранное
				</Link>
				<a
					onClick={close}
					href='https://resell.com.ua/blog/'
					target='_blank'
					rel="noopener noreferrer"
					styleName="navWrapper-block"
				>
					<span>
						<img src={news} alt="megaphone"/>
					</span>
                    Блог
				</a>
				{/* <Link */}
				{/* onClick={close} */}
				{/* to={`/buy/1/bargain`} */}
				{/* styleName="navWrapper-block articles" */}
				{/* > */}
				{/* <span> */}
				{/* <img src={auc} alt="megaphone"/> */}
				{/* </span> */}
				{/* Аукцион */}
				{/* </Link> */}
				<If condition={auth}>
					<a
						onClick={logOut}
						styleName="navWrapper-block last"
					>
						<span>
							<img src={logout} alt="megaphone"/>
						</span>
						Выйти
					</a>
				</If>
				<h4>Служба поддержки</h4>
				<a
					styleName="navWrapper-block support"
					href="tel:0800330248"
				>
					<span>
						<img src={phone} alt="megaphone"/>
					</span>
					0 800 330 248
				</a>
				<a
					styleName="navWrapper-block support"
					href="mailto:support@resell.com.ua"
				>
					<span>
						<img src={mail} alt="megaphone"/>
					</span>
					support@resell.com.ua
				</a>
			</div>
		)
	}
}

Nav.propTypes = {
	close: PropTypes.func,
	logOut: PropTypes.func,
	auth: PropTypes.bool

}

export default Nav
