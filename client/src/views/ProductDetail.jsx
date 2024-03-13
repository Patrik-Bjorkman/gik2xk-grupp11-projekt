import { useEffect, useState } from 'react';
import { getProduct } from '../services/ProductServ';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';
import ProductItemLarge from '../components/ProductItemLarge';

function ProductDetail() {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProduct(id).then((product) => setProduct(product));
	}, [id]);
	return (
		<>
			<Card>
				{product ? (
					<div>
						<ProductItemLarge product={product} />
					</div>
				) : (
					<h3>Loading...</h3>
				)}
			</Card>
		</>
	);
}

export default ProductDetail;
