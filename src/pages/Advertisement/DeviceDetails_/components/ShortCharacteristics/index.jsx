import React, {Component} from 'react'
import { Accordion } from 'semantic-ui-react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Comentaries from '../Comentaries'
import arrow from 'assets/arrow_sellFlow.svg'
import memory from 'src/assets/box.svg'
import malb from 'src/assets/Malb.svg'
import box from 'src/assets/memory.svg'
import novaposhta from 'src/assets/novaposhta.svg'
import maestro from 'src/assets/footer/Maestro_logo.svg'
import master from 'src/assets/footer/master.svg'
import visa from 'src/assets/footer/visa.svg'
import WayForPay from 'src/assets/footer/WayForPay_logo_black.png'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import './acordionStyle.css'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class ShortCharacteristics extends Component {
state = { activeIndex: 0 }

handleClick = (e, titleProps) => {
	const { index } = titleProps
	const { activeIndex } = this.state
	const newIndex = activeIndex === index ? -1 : index

	this.setState({ activeIndex: newIndex })
}

render () {
	const { activeIndex } = this.state
	const { characteristics, accessories, countComents, verifiedSeller } = this.props
	return (
		<div styleName="shortCharacteristics">
			<div styleName="shortCharacteristics-item">
				<Accordion styled>
					<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        Xарактеристики
						<img styleName={activeIndex === 0 ? 'arrow arrowActive' : 'arrow'} src={arrow} alt="arrow"/>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 0}>
						<div styleName="Characteristics">
							<div styleName="CharacteristicsItem">
								<img src={malb} alt=""/>
								<ul>
									<li>Цвет:</li>
									<If condition={characteristics.length}>
										<For index='index' each='item' of={characteristics}>
											<If key={index} condition={item['spec_type'] === 'Color'}>
												<li key={index}>{item.name}</li>
											</If>
										</For>
									</If>
								</ul>
							</div>
							<div styleName="CharacteristicsItem">
								<img src={box} alt=""/>
								<ul>
									<li>Комплектация:</li>
									<Choose>
										<When condition={accessories.length}>
											<For each='item' index='index' of={accessories}>
												<li key={index}>{item.name}</li>
											</For>
										</When>
										<Otherwise>
											<li>Не указано</li>
										</Otherwise>
									</Choose>
								</ul>
							</div>
							<div styleName="CharacteristicsItem">
								<img src={memory} alt=""/>
								<ul>
									<li>Память:</li>
									<If condition={characteristics.length}>
										<For index='index' each='item' of={characteristics}>
											<If key={index} condition={item['spec_type'] === 'Storage Capacity'}>
												<li key={index}>{item.name}</li>
											</If>
										</For>
									</If>
								</ul>
							</div>
						</div>
					</Accordion.Content>

					<Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        Комментарии ({countComents})
						<img styleName={activeIndex === 1 ? 'arrow arrowActive' : 'arrow'} src={arrow} alt="arrow"/>
					</Accordion.Title>

					<Accordion.Content active={activeIndex === 1}>
						<Comentaries/>
					</Accordion.Content>

					<Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        Гарантия
						<img styleName={activeIndex === 2 ? 'arrow arrowActive' : 'arrow'} src={arrow} alt="arrow"/>
					</Accordion.Title>

					<Accordion.Content active={activeIndex === 2}>
						<p styleName="wharanty">
                            Минимальный срок гарантии -  10 дней.
                            Расширенная гарантия может составить
                            3, 6 или 12 месяцев
						</p>
					</Accordion.Content>
					<Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
						<div>
                            Доставка
							<img src={novaposhta} styleName="novaposhta" alt="novaposhta"/>
						</div>
						<img styleName={activeIndex === 3 ? 'arrow arrowActive' : 'arrow'} src={arrow} alt="arrow"/>
					</Accordion.Title>

					<Accordion.Content active={activeIndex === 3}>
						<p styleName="wharanty">
                            Срок доставки - от 1 до 3 дней
						</p>
					</Accordion.Content>
					<Accordion.Title className={'last'}>
						<div>
                            Оплата
							<If condition={!verifiedSeller}>
								<img src={visa} styleName="payIcon" alt="visa"/>
								<img src={maestro} styleName="payIcon" alt="maestro"/>
								<img src={master} styleName="payIcon" alt="master"/>
								<img src={WayForPay} styleName="payIcon" alt="WayForPay"/>
							</If>
							<If condition={verifiedSeller}>
								<img src={novaposhta} styleName="payIcon" alt="WayForPay"/>
							</If>
						</div>
					</Accordion.Title>
					<p styleName="payment">Наложенный платеж (Нова пошта)</p>
				</Accordion>
			</div>
		</div>
	)
}
}

ShortCharacteristics.propTypes = {
	accessories: PropTypes.array,
	characteristics: PropTypes.array,
	countComents: PropTypes.number,
	verifiedSeller: PropTypes.bool
}

export default ShortCharacteristics
