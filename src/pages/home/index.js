import React from 'react'
import styles from './styles.scss'
import ParallaxMousemove from 'react-parallax-mousemove'
import Button from 'src/generalElements/button/button'
import TrendingDeales from './trendingDeales/trendingDeals'
import LastChanseToBuy from './lastChanceToBuy'
import Bestsellers from './bestsellers'
import PropTypes from 'prop-types'
import LatestProduct from './latestProduct'
import Baners from './baners'
import HotDeals from './hotDeals'
import RecentlyViewed from './recentlyViewed'
import logo1 from 'assets/logoSponsors/logoconsulting.png'
import logo5 from 'assets/logoSponsors/logomotors.png'
import logo3 from 'assets/logoSponsors/logomasterstudy.png'
import logo2 from 'assets/logoSponsors/04.jpg'
import logo4 from 'assets/logoSponsors/03.jpg'

class Home extends React.Component {
	render () {
		// styles for paralax
		const style = {
			outter: {
				background: 'rgba( 243, 243, 243, 1)',
				backgroundSize: 'cover',
				width: '100%',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				marginBottom: '30px'
			},
			infoLayerStyle: {
				position: 'relative',
				marginTop: '-60px'
			}

		}
		return (
			<div>
				<div className={styles.greyCont}>
					<div className={styles.contentContainer}>
						<div className={styles.homeCont}>
							<ParallaxMousemove containerStyle={style.outter}>
								<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
									xFactor: 0.025,
									yFactor: 0.025
								}}
								springSettings={{
									stiffness: 10,
									damping: 10
								}}
								>
									<img className={styles.imgPhone} src={require('../../assets/phones.png')} alt="Parallax Layer"></img>
								</ParallaxMousemove.Layer>

								<div className={styles.homeTitle}>
									<div>
										<h4>Do even more</h4>
										<h2>The worlds first infinity phone</h2>
										<p>The expansive display streyches from edge to edge,
										giving you the most amount of screen in the list
										amount of space
										</p>
									</div>
								</div>

							</ParallaxMousemove>
						</div>
						<div className={styles.containerForBaners}>
							<Baners index={0} />
							<Baners index={1} />
						</div>
					</div>
				</div>
				<div className={styles.contentContainer}>
					<TrendingDeales />
					<LastChanseToBuy />
				</div>
				<div className={styles.greyCont}>
					<div className={styles.contentContainer}>
						<Bestsellers />
					</div>
				</div>
				<div className={styles.contentContainer}>
					<LatestProduct />
					<div className={styles.containerForBaners}>
						<Baners index={2} />
						<Baners index={3} />
					</div>
					<HotDeals />
					<RecentlyViewed />
					<div className={styles.logoSponsors}>
						<img src={logo3} alt=''/>
						<img src={logo2} alt=''/>
						<img src={logo4} alt=''/>
						<img src={logo1} alt=''/>
						<img src={logo5} alt=''/>
					</div>
				</div>
			</div>
		)
	}
}
Home.propTypes = {
	match: PropTypes.string
}

export default Home
