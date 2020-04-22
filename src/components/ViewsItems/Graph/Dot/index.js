import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

function Dot ({cx, cy, value, type}) {
	switch (type) {
	case 'line' : {
		if (value) {
			return (
				<g>
					<text x={cx - 10} y={cy - 10}>
						{numeral(value).format(0, 0).split(',').join(' ')}
					</text>
					<svg>
						<circle
							cx={cx}
							cy={cy}
							r="2"
							stroke="#dc0000"
							strokeWidth="1"
							fill="#dc0000"
						/>
					</svg>
				</g>
			)
		} else { return <g></g> }
	}
	default: {
		if (value[1]) {
			return (
				<g>
					<text
						x={cx - 10}
						y={cy - 10}
					>
						{numeral(value[1]).format(0, 0).split(',').join(' ')}
					</text>
					<svg>
						<circle cx={cx} cy={cy} r="2" stroke="#dc0000" strokeWidth="1" fill="#dc0000"/>
					</svg>
				</g>
			)
		} else { return <g></g> }
	}
	}
}

Dot.propTypes = {
	cx: PropTypes.number,
	cy: PropTypes.number,
	value: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.number
	]),
	type: PropTypes.string
}

export default Dot
