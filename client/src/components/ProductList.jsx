import { useEffect, useState } from 'react';
import { getAll } from '../services/ProductServ';
import ProductItemSmall from './ProductItemSmall';
import SortingAccordion from './SortingAccordion';
import { Box, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

function ProductList({ pathname }) {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '95%',
	}));
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAll(pathname).then((products) => {
			setProducts(products);
		});
	}, [pathname]);

	if (!Array.isArray(products)) {
		return <h3>Kunde inte hämta Produkter</h3>;
	}

	const handleSort = (criteria) => {
		let sortedProducts = [...products];
		switch (criteria) {
			case 'cheapest':
				sortedProducts.sort((a, b) => a.price - b.price);
				break;
			case 'expensive':
				sortedProducts.sort((a, b) => b.price - a.price);
				break;
			case 'alphabeticala-z':
				sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 'alphabeticalz-a':
				sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
				break;
			default:
				sortedProducts.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);
		}
		setProducts(sortedProducts);
	};

	return (
		<>
			<SortingAccordion onSort={handleSort} />
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{products.map((product) => (
						<Grid item xs={12} sm={4} key={product.id}>
							<Item>
								<ProductItemSmall product={product} />
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}

export default ProductList;
