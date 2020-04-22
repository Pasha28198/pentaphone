import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from '../styles.scss'

const List = props => {
	const {data, goBack} = props
	const accs = data.filter(item => (item.key === 'accessories') && item)
	const dopInfo = data.filter(item => (item.key === 'dopInfo') && item)
	const newDevice = data.find(item => (item.key === 'condition') && item) || {}
	return (
		<article>
			<div>
				<button className={styles.changeBtn} onClick={goBack}>Изменить</button>
				<For each='item' index='i' of={data}>
					<If condition={ i < 6 }>
						<Choose>
							<When condition = { i < 1 }>
								<h1 key={ i }>{ item.name }</h1>
							</When>
							<Otherwise>
								<If condition={
									!(newDevice.pk === '100' && (item.key === 'visual_condition'))
								}
								>
									<p key={ i }>
										<span>{ item.label === 'Модель' ? '' : item.label + ': ' }</span>
										{' ' + item.name[0].toUpperCase() + item.name.slice(1)}
									</p>
								</If>
							</Otherwise>
						</Choose>
					</If>
				</For>
			</div>
			<For each='item' index='i' of={dopInfo}>
				<p key={i}>
					<span>
						{item.advert}
					</span> :
					{` ${item.name[0].toUpperCase() + item.name.slice(1)}`}
				</p>
			</For>
			<If condition={accs.length}>
				<p>
					<span>Аксессуары : </span>
					<For each='item' index='i' of={accs}>
						<Choose>
							<When condition={(accs.length - 1) === i}>
								{item.name.toLowerCase()}
							</When>
							<Otherwise>
								<Choose>
									<When condition={i === 0}>
										{`${item.name.charAt(0).toUpperCase() + item.name.substr(1)}, `}
									</When>
									<Otherwise>
										{`${item.name.toLowerCase()}, `}
									</Otherwise>
								</Choose>
							</Otherwise>
						</Choose>
					</For>
				</p>
			</If>
		</article>
	)
}
List.propTypes = {
	index: PropTypes.number,
	item: PropTypes.object,
	cleanInfo: PropTypes.func,
	data: PropTypes.array,
	goBack: PropTypes.func
}

export default List
