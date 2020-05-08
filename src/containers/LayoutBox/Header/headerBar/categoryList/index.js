import React from 'react'
import styles from './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCamera, faMobileAlt, faTv, faGamepad, faHeadphones, faTools } from '@fortawesome/free-solid-svg-icons'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import watch from '../../../../../assets/watch.svg'

const CategoryList = () => {
	return (
		<div className={styles.listOfCategory}>
			<div >
				<FontAwesomeIcon icon={faHandPointer} />
				<NavLink to='/accessories'>Accessories</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4>Accessories</h4>
						<ul>
							<li><a href='#'>All computers & Accessories</a></li>
							<li><a href='#'>Power Pritection</a></li>
							<li><a href='#'>Bags</a></li>
							<li><a href='#'>Cabeles</a></li>
							<li><a href='#'>Vehicle Electronics</a></li>
							<li><a href='#'>Audio & Video Accessories</a></li>
							<li><a href='#'>Batteries</a></li>
							<li><a href='#'>Chargers & Accessories</a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faLaptop} />
				<NavLink to='/computers' >Computers</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4>Computers</h4>
						<ul>
							<li><a href='#'>All computers & Accessories</a></li>
							<li><a href='#'> Computer Components </a></li>
							<li><a href='#'> Laptops </a></li>
							<li><a href='#'> Desktops </a></li>
							<li><a href='#'> Computer Cases </a></li>
							<li><a href='#'> Mouses </a></li>
							<li><a href='#'> Servers </a></li>
							<li><a href='#'> Keyboards </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faCamera} />
				<NavLink to='/cameraPhoto' >Camera & Photo</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4>Cameras & Photos</h4>
						<ul>
							<li><a href='#'>Cameras & Photos</a></li>
							<li><a href='#'> Microphones </a></li>
							<li><a href='#'> Action Video Cameras </a></li>
							<li><a href='#'> Lenses </a></li>
							<li><a href='#'> Camera Cases </a></li>
							<li><a href='#'> Cameras </a></li>
							<li><a href='#'>  DSLR Cameras </a></li>
							<li><a href='#'> Reflectors </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faMobileAlt} />
				<NavLink to='/mobilesTablets'>Mobiles & Tablets</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4>Mobiles & Tablets</h4>
						<ul>
							<li><a href='#'>All Mobiles & Tablets</a></li>
							<li><a href='#'> Tablets </a></li>
							<li><a href='#'> Micro SD Memory Cards </a></li>
							<li><a href='#'> Cell Phone Chargers </a></li>
							<li><a href='#'> Smartphones </a></li>
							<li><a href='#'> Cases & Covers </a></li>
							<li><a href='#'> Landline Phones </a></li>
							<li><a href='#'> Selfie Sticks </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faTv} />
				<NavLink to='/mobilesTablets'>Tvs & Audios</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4> Tv & Audio </h4>
						<ul>
							<li><a href='#'> All Tv & Audio </a></li>
							<li><a href='#'> OLED TV </a></li>
							<li><a href='#'> DVD Players & Recorders </a></li>
							<li><a href='#'> Projection Screens </a></li>
							<li><a href='#'> LED & LCD TVs </a></li>
							<li><a href='#'> Remote Controls </a></li>
							<li><a href='#'> Media Players </a></li>
							<li><a href='#'> Speakers </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faGamepad} />
				<NavLink to='/mobilesTablets'>Consoles & Games</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4> Consoles & Games </h4>
						<ul>
							<li><a href='#'>  All Game consoles  </a></li>
							<li><a href='#'>  Video Games  </a></li>
							<li><a href='#'>  Virtual Reality  </a></li>
							<li><a href='#'>  Racing Wheels  </a></li>
							<li><a href='#'>  Joysticks  </a></li>
							<li><a href='#'>  Digital Games & DLC  </a></li>
							<li><a href='#'>  Game Controllers </a></li>
							<li><a href='#'>  Gamepads  </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faHeadphones} />
				<NavLink to='/mobilesTablets'>Gatgets</NavLink>
				<div className={styles.hiddenBlockContainer}>
					<div className={styles.subLinks}>
						<h4>Gadgets</h4>
						<ul>
							<li><a href='#'> All Gadgets </a></li>
							<li><a href='#'> Alarm & Sensor </a></li>
							<li><a href='#'> Smart Home Appliances </a></li>
							<li><a href='#'> MP3 Players </a></li>
							<li><a href='#'> Smart Remote Controls </a></li>
							<li><a href='#'> Wearable Devices </a></li>
							<li><a href='#'> Watches </a></li>
							<li><a href='#'> Headphone </a></li>
						</ul>
					</div>
					<div className={styles.imgCont}>
					</div>
				</div>
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
export default CategoryList
