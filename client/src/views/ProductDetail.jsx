import { useEffect, useState } from 'react';
import { getProduct } from '../services/ProductServ';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Card, Button, Alert } from '@mui/material';
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

	const [alert, setAlert] = useState({
		open: false,
		message: '',
		severity: 'success',
	});

	const handleClickBuy = async () => {
		try {
			await addProductToCart(id, userId);
			// On success, show a success message
			setAlert({
				open: true,
				message: 'Produkten har lagts till i varukorgen!',
				severity: 'success',
			});
		} catch (error) {
			console.error('Något gick fel:', error);
			// On error, show an error message
			setAlert({
				open: true,
				message: 'Något gick fel när produkten skulle läggas till.',
				severity: 'error',
			});
		}
	};

	useEffect(() => {
		getProduct(id).then((product) => setProduct(product));
	}, [id]);

	const location = useLocation();
	const message = location.state?.message;
	const [open, setOpen] = useState(true);

	function clearMessage() {
		window.history.replaceState({}, '');
	}
	return (
		<>
			{message && open && (
				<Alert
					onClose={() => {
						setOpen(false);
						clearMessage();
					}}
					variant='filled'
					severity='success'
					sx={{ m: 2 }}
				>
					{message}
				</Alert>
			)}
			{alert.open && (
				<Alert
					onClose={() => setAlert({ ...alert, open: false })}
					variant='filled'
					severity={alert.severity}
					sx={{ m: 2 }}
				>
					{alert.message}
				</Alert>
			)}
			<Card>
				{product ? (
					<Grid container justifyContent='center' spacing={2}>
						<Card component='section'>
							<Paper elevation={8} sx={{ p: 4, mt: 5, }}>
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
