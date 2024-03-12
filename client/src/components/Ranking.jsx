import { Typography, Rating } from '@mui/material';
import RatingList from './RatingList'; // Assuming you renamed RatingList to RatingList

function Ranking({ productId }) {
	const averageRating = RatingList(productId);

	return (
		<>
			<Typography component='legend'>Betyg</Typography>
			<Rating
				name='read-only'
				value={averageRating}
				precision={0.25}
				readOnly
			/>
		</>
	);
}

export default Ranking;
