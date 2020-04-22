import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import InfinityPagination from 'src/components/FunctionalityChunks/InfinityPagination'
import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class DropDown extends Component {
	handleButton = (item) => {
		const {hideDropDown, changeDefValue, input} = this.props
		input.onChange(item.uuid)
		this.setName(item.name)
		changeDefValue(item)
		hideDropDown()
	}

	inputOnClick = () => {
		const {search, showDropDown, hideCity, hideDepart, label} = this.props
		search()
		showDropDown()
		label === 'Город' ? hideDepart() : hideCity()
	}

	takeRef = inp => {
		const {context, label} = this.props
		label === 'Город' ? (context.inp = inp) : (context.inpDepart = inp)
	}
	setName = name =>
		this.props.label === 'Город'
			? (this.props.context.inp.value = name)
			: (this.props.context.inpDepart.value = name)

	componentWillReceiveProps ({defaultsValue: {uuid: nxtId, name}}) {
		const {defaultsValue: {uuid}, context, label} = this.props;
		(nxtId !== uuid) && label === 'Город' && (context.inp.value = name);
		(nxtId !== uuid) && label !== 'Город' && (context.inpDepart.value = name)
	}

	render () {
		const {
			props: {
				data, label, active,
				disabled, search, count
			},
			takeRef, handleButton, inputOnClick
		} = this
		const path = window.location.pathname
		return (
			<div
				styleName= {
					path !== '/User-setting'
						? 'dropDownWrapper wide'
						: 'dropDownWrapper'
				}
			>
				<div styleName="complexInput">
					<input
						onChange={e => {
							let value = e.target.value
							clearTimeout(this.timer)
							this.timer = setTimeout(() => { search(value) }, 700)
						}}
						className={label === 'Город' ? 'inp' : 'inpDep'}
						ref={takeRef}
						type="text"
						onClick={inputOnClick}
						placeholder={label}
						disabled={disabled}
					/>
					<img src="" alt=""/>
				</div>

				<div
					ref={drop => (this.drop = drop)}
					styleName={active ? 'dropDown active' : 'dropDown'}
				>
					<Choose>
						<When condition={data.length}>
							<InfinityPagination
								pagesCount={count}
								nextData={(page) => search('', page)}
								element={this.drop}
							>
								<For each='item' index='index' of={data}>
									<button type='button' styleName="dropButton" onClick={() => handleButton(item)}>
										{item.name}
									</button>
								</For>
							</InfinityPagination>
						</When>
						<Otherwise>
							<div styleName="noData">
								{label === 'Город' ? 'Город не найден' : 'Отделение не найдено'}
							</div>
						</Otherwise>
					</Choose>
				</div>
			</div>
		)
	}
}

DropDown.propTypes = {
	defaultsValue: PropTypes.string,
	input: PropTypes.object,
	data: PropTypes.array,
	meta: PropTypes.object,
	search: PropTypes.func,
	label: PropTypes.string,
	context: PropTypes.object,
	active: PropTypes.bool,
	hideDropDown: PropTypes.func,
	showDropDown: PropTypes.func,
	hideCity: PropTypes.func,
	hideDepart: PropTypes.func,
	onChangeValue: PropTypes.func,
	changeDefValue: PropTypes.func,
	disabled: PropTypes.string,
	count: PropTypes.number

}

export default DropDown
