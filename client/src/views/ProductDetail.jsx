import { useEffect, useState } from 'react';
import { getProduct } from '../services/ProductServ';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Box } from '@mui/material';
import ProductItemLarge from '../components/ProductItemLarge';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import { addProductToCart } from '../services/CartService';
import { Grid, Paper } from '@mui/material';

function ProductDetail() {
	const { id } = useParams();
	const userId = 1;
	const navigate = useNavigate();

	const [product, setProduct] = useState(null);

	const handleClickBuy = async () => {
		console.log(id);
		try {
			const data = await addProductToCart(id, userId);
			console.log('Produkten har lagts till i varukorgen:', data);
		} catch (error) {
			console.error('Något gick fel:', error);
		}

		addProductToCart(id, 2);
	};

	useEffect(() => {
		getProduct(id).then((product) => setProduct(product));
	}, [id]);
	return (
		<>
			<Card>
				{product ? (
					<Grid container>
						<Card component="section" item xs={12} md={8}>
							<Paper elevation={8} sx={{ p: 2, mt: 4 }}>
							<ProductItemLarge product={product} />
							</Paper>
					</Card>
					</Grid>
				) : (
					<h3>Loading...</h3>
				)}
				<Button 
					variant='contained'
					color='secondary'
					startIcon={<ChevronLeftIcon />}
					sx={{ m: 2 }}
					onClick={() => navigate(-1)}
					
					
				>
					Tillbaka
				</Button>
				<Button
					startIcon={<EditIcon />}
					variant='contained'
					sx={{ mr: 2 }}
					onClick={() => navigate(`/products/${product.id}/edit`)}
				>
					Ändra
				</Button>
				<Button 
					startIcon={<AddShoppingCartIcon />}
					variant='contained'
					color='success'
					sx={{ mr: 2 }}
					onClick={handleClickBuy}
				>
					Lägg till i varukorg
				</Button>
			</Card>
		</>
	);
}

export default ProductDetail;
