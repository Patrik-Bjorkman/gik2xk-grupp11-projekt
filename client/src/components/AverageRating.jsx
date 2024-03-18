import { useEffect, useState } from 'react';
import { getAllRatings } from '../services/ProductServ';
import { Typography, Rating } from '@mui/material';

function AverageRating({ productId, refreshTrigger }) {
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		getAllRatings().then((allRatings) => {
			const productRatings = allRatings.filter(
				(rating) => rating.productId === productId
			);
			const average =
				productRatings.reduce((acc, curr) => acc + curr.rating, 0) /
				productRatings.length;
			setAverageRating(average || 0);
		});
	}, [productId, refreshTrigger]);

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
