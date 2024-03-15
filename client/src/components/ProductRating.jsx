import {
	Typography,
	Rating,
	Paper,
	Container,
	Box,
	Chip,
	Card,
} from '@mui/material';
import ProductRatingList from './ProductRatingList';
import { removeRating } from '../services/ProductServ';

function ProductRating({ productId, refreshTrigger, onRatingDeleted }) {
	const productRatings = ProductRatingList({ productId, refreshTrigger });

	function onRatingDelete(rating) {
		console.log('Delete rating', rating);
		removeRating(productId, rating.id).then(() => {
			onRatingDeleted();
		});
	}

	return (
		<Paper sx={{ my: 4, p: 4 }}>
			{productRatings.map((rating, index) => (
				<Card key={index} elevation={5} sx={{ m: 1, p: 1 }}>
					<Container>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems={'center'}
						>
							<Chip
								onDelete={() => onRatingDelete(rating)}
								key={rating.rating}
								label={rating.rating}
							/>
							<Rating
								name={`read-only-${index}`}
								value={rating.rating}
								readOnly
							/>
							<Typography variant='body1'>
								Kommentar: {rating.comment || 'Ingen kommentar'}
							</Typography>
							<Typography variant='body2' color='textSecondary'>
								Skapad: {new Date(rating.createdAt).toLocaleDateString()}
							</Typography>
						</Box>
					</Container>
				</Card>
			))}
		</Paper>
	);
}

export default ProductRating;
