import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import Button from 'src/generalElements/button/button'
import ban1 from 'src/assets/banners/ban1.png'
import ban2 from 'src/assets/banners/ban2.png'
import ban3 from 'src/assets/banners/ban3.jpg'
import ban4 from 'src/assets/banners/ban4.jpg'

const banersInfo = [
	{
		title: 'Keytar blue bottle',
		subtitle: 'Cardigan lyft ennui listicle bespoke, pitchfork cloud bread subway tile disrupt quinoa gluten-free slow-carb',
		img: `${ban1}`,
		color: null,
		text: 'shop now',
		link: '#'
	},
	{
		title: 'Truffaut gluten-free',
		subtitle: 'Organic cardigan flannel four dollar toast salvia dreamcatcher subway tile aesthetic kale chips.',
		img: `${ban2}`,
		color: null,
		text: 'shop now',
		link: '#'
	},
	{
		title: 'Style & performance',
		subtitle: 'Polaroid subway tile cronut la croix. Enamel pin dreamcatcher echo park PBR&B. Scenester squid meh vinyl retro',
		img: `${ban3}`,
		color: '#fff',
		text: 'read more',
		link: '#'
	},
	{
		title: 'Smart Televisions',
		subtitle: 'Cardigan lyft ennui listicle bespoke, pitchfork cloud bread subway tile disrupt quinoa gluten-free slow-carb',
		img: `${ban4}`,
		color: null,
		text: 'read more',
		link: '#'
	}
]
function renderBaners (ind) {
	return (
		banersInfo.map((item, i) => {
			if (ind === i) {
				return (
					<div className={styles.baner} style={{background: `url(${item.img}) center no-repeat`}}>
						<h4 style={{color: item.color}}>{item.title}</h4>
						<p style={{color: item.color}}>{item.subtitle}</p>
						<Button linkTo={item.link} text={item.text} />
					</div>
				)
			}
		})
	)
}
const Baners = (props) => {
	return (
		<React.Fragment>
			{ renderBaners(props.index) }
		</React.Fragment>
	)
}
Baners.propTypes = {
	index: PropTypes.number
}
export default Baners
