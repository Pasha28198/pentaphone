import React from 'react'
import PropTypes from 'prop-types'
import {
	Cell,
	Area,
	XAxis,
	ReferenceLine,
	Line,
	ComposedChart,
	ResponsiveContainer
} from 'recharts'
import './styleGraphElement.scss'
import Dot from './Dot'

const config = [
	{
		name: '',
		value: 18000
	},
	{
		name: 'b',
		value: 15000
	},
	{
		name: 'c',
		value: 14000
	},
	{
		name: 'd',
		value: 12000,
		valueArea: 18000,
		lineValue: 12000
	},
	{
		name: 'e',
		valueArea: 18000,
		lineValue: 10000
	}
]

const Graph = props => {
	const {data} = props
	return (
		<ResponsiveContainer>
			<ComposedChart {...{data, margin: {top: 40, right: 0, left: 0, bottom: 5}}}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#f50707" stopOpacity={0.7}/>
						<stop offset="95%" stopColor="#d9d2d2" stopOpacity={0.3}/>
					</linearGradient>
				</defs>
				<XAxis dataKey="name" axisLine={false} tickLine={false} />
				<Area dataKey="value" stroke="#dc0000" dot={<Dot/>} fill="url(#colorUv)"/>
				<ReferenceLine x={config[config.length - 2].name} stroke="#EFF2E6" />
				<Area dataKey="valueArea" stroke="#e5e9ef" fill="#e5e9ef" dot={false}/>
				<Line dataKey="lineValue" stroke="#dc0000" dot={<Dot type='line'/>} strokeDasharray="5 2"/>
				<Cell stroke="#dc0000"/>
			</ComposedChart>
		</ResponsiveContainer>
	)
}

Graph.propTypes = {
	data: PropTypes.array
}

export default Graph
