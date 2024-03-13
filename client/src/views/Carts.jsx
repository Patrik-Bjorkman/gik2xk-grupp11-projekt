//import getCart from '../services/CartService';
import { useEffect } from 'react';

function Carts() {
	useEffect(() => {
		getCart().then((product) => setProduct(product));
	}, []);
	return (
		<>
			<h1>Carts</h1>
			<p>Find me in ./client/src/views/Carts.jsx</p>
		</>
	);
}

export default Carts;
