import { Box, Button, CardMedia, Container, Typography} from '@mui/material';
import { getCart, reduceAmount, increaseAmount } from '../services/CartService';
import { useEffect, useState } from 'react';
import placeholderImage from '../assets/placeholder.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Carts() {
	const userId = 1;

	const [cart, setCart] = useState(null);
	useEffect(() => {
		getCart(userId).then((cart) => setCart(cart));
	}, [userId]);

	const handleReduceAmount = async (userId, productId) => {
		await reduceAmount(userId, productId);
		console.log('userId:', userId, 'productId:', productId);
		const updatedCart = await getCart(userId);
		setCart(updatedCart);
	};

	const handleIncreaseAmount = async (userId, productId) => {
		await increaseAmount(userId, productId);
		const updatedCart = await getCart(userId);
		console.log('userId:', userId, 'productId:', productId);
		setCart(updatedCart);
	};

	return (
		<>
			<Typography>Varukorg</Typography>
			{cart ? (
				<div>
					{cart.map((cartRows) => (

						<Container key={cartRows.id}>
							<Box sx={{ mb: 4 }}>
								<CardMedia 
									component='img'
									image={cartRows.product.imageUrl || placeholderImage}
									alt={cartRows.product.title}
									sx={{ maxWidth: '10%' }}
								/>
								<Typography>Produkt: {cartRows.product.title}</Typography>
								<Typography>Pris: {cartRows.product.price} kr</Typography>
								<Typography>Antal: {cartRows.amount}</Typography>
								<Typography>
									Totalt: {cartRows.product.price * cartRows.amount} kr
								</Typography>
								<Button
									startIcon={<RemoveIcon />}
									variant='contained'
									onClick={() =>
										handleReduceAmount(userId, cartRows.product.id)
									}
								/>
								<Button
									sx={{ ml: 2 }}
									startIcon={<AddIcon />}
									variant='contained'
									onClick={() =>
										handleIncreaseAmount(userId, cartRows.product.id)
									}
								/>
							</Box>
						</Container>
					))}

					<Container>
						<Box>
							<Typography variant='h4' component='h2'>
								Totalt:{' '}
								{cart.reduce(
									(acc, row) => acc + row.product.price * row.amount,
									0
								)}{' '}
								kr
							</Typography>
						</Box>
					</Container>
				</div>
			) : (
				<h3>Kunde inte hämta varukorg</h3>
			)}
		</>
	);
}

export default Carts;
