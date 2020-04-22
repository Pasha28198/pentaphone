import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import { Checkbox } from 'semantic-ui-react'
import Checkbox from 'src/components/ViewsItems/Checkbox/index.js'

import styles from './styles.scss'

class Example extends Component {
	state = {
		active: false,
		more: false,
		loaded: false
	}

	loadData = () => {
		this.props.moreLoadData()
		this.setState({
			more: true,
			loaded: true
		})
	}

	toombler = () => {
		this.setState(({active}) => ({ active: !active }))
	}

	toomblerMore = () => {
		this.setState((prev) => ({more: !prev.more}))
	}

	componentDidMount () {
		this.props.open && this.setState({active: this.props.open})
	}

	render () {
		const {
			props: {
				label, data,
				moreLoadData,
				change
			},
			state: {
				active,
				loaded,
				more
			},
			toombler
		} = this

		const dataWithMore = !more ? data : data.filter((item, i) => i < 7)

		return (
			<div
				className={styles.blockDropChoose}
				style={!active ? {marginTop: 0, maxHeight: 47} : {}}
			>
				<div
					onClick={toombler}
					className={styles.lable}
				>
					<span>{label}</span>
					<svg
						style={!active ? {transform: 'rotate(180deg)'} : {}}
						onClick={toombler}
						width="11"
						height="6"
						viewBox="0 0 11 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.328125 5.6045C0.328125 5.71061 0.362607 5.80707 0.431573 5.88424C0.569504 6.03858 0.793642 6.03858 0.931573 5.88424L5.32812 0.96463L9.72468 5.88424C9.86261 6.03858 10.0867 6.03858 10.2247 5.88424C10.3626 5.7299 10.3626 5.4791 10.2247 5.32476L5.57812 0.115756C5.44019 -0.0385852 5.21606 -0.0385852 5.07812 0.115756L0.431573 5.32476C0.362607 5.40193 0.328125 5.49839 0.328125 5.6045Z"
							fill="#323B45"
						/>
					</svg>
				</div>
				<div className={styles.data} >
					{
						dataWithMore.map((item, index) => (
							<figure
								key={ index }
								className={styles.itemList}
							>
								<Checkbox
									className="check"
									checked={ item.checked }
									onChange={ () => { change(item.pk) } }
									labelText={item.value}
								/>
							</figure>
						))
					}
					{
						Boolean(moreLoadData) && (
							<span
								onClick={loaded ? this.toomblerMore : this.loadData}
								className={styles.load}
							>
								Показать {more ? 'менше' : 'больше'}
								<svg
									style={more ? {transform: 'rotate(180deg)'} : {}}
									width="9"
									height="6"
									viewBox="0 0 9 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0.629493 0.339436C0.629493 0.248535 0.658356 0.165899 0.716084 0.0997891C0.831539 -0.0324292 1.01915 -0.0324292 1.13461 0.0997891L4.81475 4.31426L8.49488 0.0997891C8.61034 -0.0324292 8.79795 -0.0324292 8.91341 0.0997891C9.02886 0.232008 9.02886 0.446863 8.91341 0.579082L5.02401 5.04146C4.90855 5.17368 4.72094 5.17368 4.60548 5.04146L0.716084 0.579082C0.658356 0.512972 0.629493 0.430336 0.629493 0.339436Z" fill="#4A90E2"/>
								</svg>
							</span>
						)
					}
				</div>
			</div>
		)
	}
}

Example.propTypes = {
	label: PropTypes.string,
	data: PropTypes.array,
	moreLoadData: PropTypes.func,
	change: PropTypes.func,
	open: PropTypes.bool
}

export default Example
