import { getAll } from '../services/ProductServ';
import { useEffect, useState } from 'react';
import ProductItemSmall from './ProductItemSmall';

function ProductList({ pathname }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAll(pathname).then((products) => {
			setProducts(products);
		});
	}, [pathname]);

	if (!Array.isArray(products)) {
		return <h3>Kunde inte hämta Produkt</h3>;
	}
	console.log(products);
	return (
		<ul>
			{products
				.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
				.map((product) => (
					<li key={`products_${product.id}`}>
						<ProductItemSmall product={product} />
					</li>
				))}
		</ul>
	);
}

export default ProductList;
