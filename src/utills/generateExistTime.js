const declOfNum = (number, titles) => {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]
}

export default ({years, months}) => {
	const textYears = declOfNum(years, ['год', 'года', 'лет'])
	const textMonth = declOfNum(months, ['месяц', 'месяца', 'месяцев'])
	// const year = years ? years + ' ' + textYears + ' и ' : ''
	// const month = months ? months +  <span>{' '+textMonth}</span> : ''
	return !years && !months
		? 'Меньше месяца'
		: {
			countMonth: months,
			textMonth: textMonth,
			countYears: years,
			textYears: textYears
		}
}
