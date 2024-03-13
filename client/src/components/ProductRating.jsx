import { Typography, Rating, Paper, Container, Box } from '@mui/material';
import ProductRatingList from './ProductRatingList';

function ProductRating({ productId, refreshTrigger }) {
	// Adjusted to use the custom hook, passing in productId and refreshTrigger
	const productRatings = ProductRatingList({ productId, refreshTrigger });

	return (
		<Paper sx={{ my: 4, p: 4 }}>
			{productRatings.map((rating, index) => (
				<div key={index}>
					<Container>
						<Box display='flex' justifyContent='space-between' mb={4}>
							{/* <Typography sx={{ mt: 2 }} component='legend'>
						Betyg
					</Typography> */}
							<Rating
								name={`read-only-${index}`}
								value={rating.rating}
								readOnly
							/>
							<Typography variant='body1'>
								Kommentar: {rating.comment || 'Ingen kommentar'}
							</Typography>
							<Typography sx={{ mb: 3 }} variant='body2' color='textSecondary'>
								Skapad: {new Date(rating.createdAt).toLocaleDateString()}
							</Typography>
						</Box>
					</Container>
				</div>
			))}
		</Paper>
	);
}

export default ProductRating;
