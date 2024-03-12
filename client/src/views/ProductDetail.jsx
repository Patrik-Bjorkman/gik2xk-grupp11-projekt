import { useEffect, useState } from 'react';
import { getProduct } from '../services/ProductServ';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';
function ProductDetail() {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProduct(id).then((product) => setProduct(product));
	}, [id]);
	return (
		<Card>
			{product ? (
				<div>
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</div>
			) : (
				<h3>Loading...</h3>
			)}
		</Card>
	);
}

export default ProductDetail;
