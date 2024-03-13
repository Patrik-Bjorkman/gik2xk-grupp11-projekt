import { Typography, Rating } from '@mui/material';
import AverageRatingList from './AverageRatingList';
function AverageRating({ productId }) {
	const averageRating = AverageRatingList(productId);

	return (
		<>
			<Typography component='legend'>Medelbetyg</Typography>
			<Rating
				name='read-only'
				value={averageRating}
				precision={0.25}
				size='large'
				readOnly
			/>
		</>
	);
}

export default AverageRating;
