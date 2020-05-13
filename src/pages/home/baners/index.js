import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import Button from 'src/generalElements/button/button'

const banersInfo = [
	{
		title: 'Keytar blue bottle',
		subtitle: 'Cardigan lyft ennui listicle bespoke, pitchfork cloud bread subway tile disrupt quinoa gluten-free slow-carb',
		img: 'https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/2/2019/07/wireless-headphones-719x349.png',
		color: null,
		text: 'shop now',
		link: '#'
	},
	{
		title: 'Truffaut gluten-free',
		subtitle: 'Organic cardigan flannel four dollar toast salvia dreamcatcher subway tile aesthetic kale chips.',
		img: 'https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/2/2019/07/smart_speakers-719x349.png',
		color: null,
		text: 'shop now',
		link: '#'
	},
	{
		title: 'Style & performance',
		subtitle: 'Polaroid subway tile cronut la croix. Enamel pin dreamcatcher echo park PBR&B. Scenester squid meh vinyl retro',
		img: 'https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/2/2019/06/shutterstock_146498354-719x314.jpg',
		color: '#fff',
		text: 'read more',
		link: '#'
	},
	{
		title: 'Smart Televisions',
		subtitle: 'Cardigan lyft ennui listicle bespoke, pitchfork cloud bread subway tile disrupt quinoa gluten-free slow-carb',
		img: 'https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/2/2019/06/shutterstock_14649835-1-719x314.jpg',
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
