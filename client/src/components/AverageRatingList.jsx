import { useEffect, useState } from 'react';
import { getAllRatings } from '../services/ProductServ';

function AverageRatingList(productId) {
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		getAllRatings().then((allRatings) => {
			const productRatings = allRatings.filter(
				(rating) => rating.productId === productId
			);
			const average =
				productRatings.reduce((acc, curr) => acc + curr.rating, 0) /
				productRatings.length;
			setAverageRating(average || 0); // Set to 0 if no ratings
		});
	}, [productId]);

	return averageRating;
}

export default AverageRatingList;
