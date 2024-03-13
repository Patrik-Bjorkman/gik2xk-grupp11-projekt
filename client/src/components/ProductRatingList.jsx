import { useEffect, useState } from 'react';
import { getProductRatings } from '../services/ProductServ';

// Refactor to useProductRatings and destructure { productId }
function ProductRatingList({ productId, refreshTrigger }) {
	const [productRatings, setProductRatings] = useState([]);

	useEffect(() => {
		if (productId) {
			// Ensure productId is defined before fetching
			getProductRatings(productId).then(setProductRatings);
		}
	}, [productId, refreshTrigger]); // Include refreshTrigger in the dependency array

	return productRatings;
}

export default ProductRatingList;
