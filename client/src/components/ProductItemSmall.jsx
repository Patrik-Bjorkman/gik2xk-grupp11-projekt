import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	Box,
	CardActions,
	Button,
	Container,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import placeholderImage from '../assets/placeholder.png';
import AverageRating from './AverageRating';
import { truncate } from '../common/formatHelpers';

function ProductItemSmall({ product }) {
	const navigate = useNavigate();
	return (
		<>
			<Card
				variant='outlined'
				sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
			>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Link to={`/products/${product.id}`}>
						<CardMedia
							component='img'
							image={product.imageUrl || placeholderImage}
							alt={product.title}
							sx={{
								mt: 2,
								maxWidth: '80%',
								borderRadius: 2,
								display: 'inline',
							}}
						/>
					</Link>
				</Box>
				<Link to={`/products/${product.id}`}>
					<Typography variant='h4' sx={{ textAlign: 'center' }}>
						{product.title}
					</Typography>
				</Link>
				<Container>
					<CardContent
						sx={{
							flex: '1 0 auto',
							justifyContent: 'space-between',
						}}
					>
						<Box>
							<Typography variant='h6'>{product.price} kr</Typography>
							<Typography>{truncate(product.description, 120)}</Typography>
							<CardActions>
								<Button onClick={() => navigate(`/products/${product.id}`)}>
									Läs mer
								</Button>
							</CardActions>
						</Box>
						<Box>
							<AverageRating productId={product.id} />
						</Box>
					</CardContent>
				</Container>
			</Card>
		</>
	);
}

export default ProductItemSmall;
