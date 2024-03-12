import {
	Link,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Box,
} from '@mui/material';
import placeholderImage from '../assets/placeholder.png';
import Ranking from './Ranking';

function ProductItemSmall({ product }) {
	return (
		<>
			<Card variant='outlined' sx={{ mb: 4 }}>
				<CardMedia
					component='img'
					image={product.imageUrl || placeholderImage}
					alt={product.title}
					sx={{ maxWidth: '50%' }}
				/>
				<Link to={`/posts/${product.id}`}>
					<h3>{product.title}</h3>
				</Link>
				<CardContent>
					<Typography>{product.price} kr</Typography>
					<Typography>{product.description}</Typography>
					<Box sx={{ mt: 2, mb: 2 }}>
						<Ranking productId={product.id} />
					</Box>
				</CardContent>
			</Card>
		</>
	);
}

export default ProductItemSmall;
