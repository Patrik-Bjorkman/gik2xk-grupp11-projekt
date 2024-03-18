import { useEffect, useState } from 'react';
import { getAllRatings } from '../services/ProductServ';

function AverageRatingList(productId, refreshTrigger) {
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

	return averageRating;
}

export default AverageRatingList;
