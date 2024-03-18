// import { getProductRatings, removeRating } from '../services/ProductServ';
// import { useState, useEffect, useCallback } from 'react';

// function RemoveRating(productId, refreshTrigger) {
// 	const [productRatings, setProductRatings] = useState([]);

// 	const fetchRatings = useCallback(async () => {
// 		const ratings = await getProductRatings(productId);
// 		setProductRatings(ratings);
// 	}, [productId]);

// 	useEffect(() => {
// 		fetchRatings();
// 	}, [fetchRatings, productId, refreshTrigger]);

// 	const onRatingDelete = useCallback(
// 		async (ratingId) => {
// 			await removeRating(productId, ratingId);
// 			fetchRatings();
// 		},
// 		[productId, fetchRatings]
// 	);

// 	return { productRatings, onRatingDelete };
// }

// export default RemoveRating;
