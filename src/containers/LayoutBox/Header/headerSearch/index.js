import React, { Component } from 'react'
import styles from './styles.scss'
import search from 'src/assets/search.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faRandom, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

class HeaderSearch extends Component {
	constructor (props) {
		super(props)
		this.state = {
			listOfCat: false,
			choosenCat: '',
			categories: [
				'All categories',
				'CAMERAS & PHOTOS',
				'COMPUTERS',
				'CONSOLES & GAMES',
				'GADGETS',
				'MOBILES  & TABLETS',
				'TOOLS & STORAGE'
			]

		}
		this.renderListOfCat = this.renderListOfCat.bind(this)
		this.makeNewCatList = this.makeNewCatList.bind(this)
	}
	componentDidMount () {
		this.setState({choosenCat: this.state.categories[0]})
		let arrOfCat = this.state.categories
		arrOfCat.splice(0, 1)
		this.setState({categories: arrOfCat})
	}
	makeNewCatList (item) {
		this.setState({choosenCat: item})
		this.setState({listOfCat: false})
		let arrayOfCat = this.state.categories
		const index = arrayOfCat.indexOf(item, 0)
		arrayOfCat.splice(index, 1)
		arrayOfCat.push(this.state.choosenCat)
		this.setState({categories: arrayOfCat})
	}

	renderListOfCat () {
		const catList = this.state.categories
		if (this.state.listOfCat) {
			return (
				<div className={styles.categoriesListCont} >
					{catList.map((item, i) => {
						return (
							<div
								key = {i + item}
								className={styles.catElement}
								onClick={ () => this.makeNewCatList(item) }
							>
								{item}
							</div>)
					})}
				</div>
			)
		} else return null
	}
	render () {
		return (
			<div className={styles.main}>
				<div styleName={styles.container}>
					<div className='row align-items-center justify-content-between'>
						<div className='col-xl-2 col-lg-2 col-md-3 col-sm-2 col-6'>
							<a className={styles.logo}><img alt="logo" /></a>
						</div>
						<div className="col-sm col-6">
							<div className={styles.formContainer}>
								<form className={styles.form}>
									<input
										type='text'
										className={styles.input}
										placeholder='What are you looking for?'
									/>
									<div onClick={ () => this.setState({ listOfCat: !this.state.listOfCat }) }>
										<div>{this.state.choosenCat}</div>
										{
											this.renderListOfCat()
										}
									</div>
									<button><img src={search} alt='search' /></button>
								</form>
							</div>
						</div>
						<div className='col-xl-2 col-lg-2 col-md-3 col-sm-2 col-6'>
							<div className={styles.iconsCont}>
								<a><FontAwesomeIcon icon={faRandom} /></a>
								<a><FontAwesomeIcon icon={faUser} /></a>
								<a><FontAwesomeIcon icon={faHeart} /></a>
								<a><FontAwesomeIcon icon={faShoppingBag} /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default HeaderSearch
