import { useEffect, useState } from 'react';
import { getProductRatings } from '../services/ProductServ';

function ProductRatingList({ productId, refreshTrigger }) {
	const [productRatings, setProductRatings] = useState([]);

	useEffect(() => {
		if (productId) {
			getProductRatings(productId).then(setProductRatings);
		}
	}, [productId, refreshTrigger]);

	return productRatings;
}

export default ProductRatingList;
