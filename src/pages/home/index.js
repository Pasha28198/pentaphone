import React from 'react'
import styles from './styles.scss'
import ParallaxMousemove from 'react-parallax-mousemove'
import Button from 'src/generalElements/button/button'
import TrendingDeales from './trendingDeales/trendingDeals'

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

						<div className={styles.topBaners}>
							<div>
								<h3>Keytar blue bottle</h3>
								<p>Cardigan lyft ennui listicle bespoke,
								pitchfork cloud bread subway tile disrupt quinoa gluten-free slow-carb</p>
								<Button text='shop now' linkTo='#'></Button>
							</div>
							<div>
								<h3>Truffaut gluten-free</h3>
								<p>Organic cardigan flannel four dollar toast salvia dreamcatcher subway tile aesthetic kale chips.</p>
								<Button text='shop now' linkTo='#'></Button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.contentContainer}>
					<TrendingDeales />
				</div>
			</div>
		)
	}
}

export default Home
