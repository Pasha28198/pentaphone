import React from 'react'
import styles from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCamera, faMobileAlt, faTv, faGamepad, faHeadphones, faTools } from '@fortawesome/free-solid-svg-icons'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import watch from '../../../../../assets/watch.svg'

const CategorySideBar = () => {
	return (
		<div className={styles.listOfCategoryMobile}>
			<div >
				<FontAwesomeIcon icon={faHandPointer} />
				<NavLink to='/accessories'>Accessories</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faLaptop} />
				<NavLink to='/computers' >Computers</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faCamera} />
				<NavLink to='/cameraPhoto' >Camera & Photo</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faMobileAlt} />
				<NavLink to='/mobilesTablets'>Mobiles & Tablets</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faTv} />
				<NavLink to='/mobilesTablets'>Tvs & Audios</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faGamepad} />
				<NavLink to='/mobilesTablets'>Consoles & Games</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faHeadphones} />
				<NavLink to='/mobilesTablets'>Gatgets</NavLink>
			</div>
			<div>
				<FontAwesomeIcon icon={faTools} />
				<NavLink to='/mobilesTablets'>Tools & storage</NavLink>
			</div>
			<div>
				<img src={watch} alt='' />
				<NavLink to='/mobilesTablets'>Watches</NavLink>
			</div>
		</div>
	)
}
export default CategorySideBar
