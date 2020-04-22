export default (data) => ({
	price: +data.price,
	details: data.details,
	serialNumber: data['serial_number'],
	condition: data.condition,
	visualCondition: data['visual_condition'],
	isWarranty: data['is_warranty'],
	isBargain: data['is_bargain'],
	isOwner: data['is_owner'],
	isReview: data['is_review'],
	startPrice: data['start_price'],
	isBet: data['is_bet']
})
