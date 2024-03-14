import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/placeholder.png';
import AverageRating from './AverageRating';

function ProductItemSmall({ product }) {
	return (
		<>
			<Card variant='outlined' sx={{ mb: 4 }}>
				<Link to={`/products/${product.id}`}>
					<CardMedia
						component='img'
						image={product.imageUrl || placeholderImage}
						alt={product.title}
						sx={{ maxWidth: '30%' }}
					/>
				</Link>
				<Link to={`/products/${product.id}`}>
					<h3>{product.title}</h3>
				</Link>
				<CardContent>
					<Typography>{product.price} kr</Typography>
					<Typography>{product.description}</Typography>
					<Box sx={{ mt: 2, mb: 2 }}>
						<AverageRating productId={product.id} />
					</Box>
				</CardContent>
			</Card>
		</>
	);
}

export default ProductItemSmall;
