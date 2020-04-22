import React from 'react'
import goldStae from 'assets/rating/starGold.svg'

function userRating () {
	return (
		<React.Fragment>
			<span>Надежный продавец</span>
			<img
				style={{
					marginLeft: 7
				}}
				src={goldStae}
				alt="star"
			/>
		</React.Fragment>
	)
}

export default userRating
