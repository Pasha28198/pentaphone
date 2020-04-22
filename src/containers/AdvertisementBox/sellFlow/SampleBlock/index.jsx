import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { PropagateLoader } from 'react-spinners'

import settings from './settings'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class SampleBlock extends Component {
	goNext = () => this.swiper && this.swiper.slideNext()
	goPrev = () => this.swiper && this.swiper.slidePrev()
	render () {
		const {data, onClick} = this.props
		return (
			<div styleName="sampleWrapper">
				<Choose>
					<When condition={data && data.length}>
						<Swiper
							{...settings}
							styleName="sellFlowSlider"
							ref={node => { (node) && (this.swiper = node.swiper) }}
						>
							<For each='item' index='index' of={data}>
								<div
									key={index}
									onClick={() => onClick(item)}
									styleName="sampleItem"
								>
									{item.name}
								</div>
							</For>
						</Swiper>
					</When>
					<Otherwise>
						<div styleName="spinnerWrapper">
							<PropagateLoader color={'#fa2a00'} loading={true}/>
						</div>
					</Otherwise>
				</Choose>
				<If condition={data && data.length > 5}>
					<button styleName='arrow right' onClick={this.goNext}/>
					<button styleName="arrow left" onClick={this.goPrev}/>
				</If>
			</div>
		)
	}
}

SampleBlock.propTypes = {
	data: PropTypes.array,
	onClick: PropTypes.func
}

export default SampleBlock
