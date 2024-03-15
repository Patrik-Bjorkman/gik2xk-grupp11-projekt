import { useState } from 'react';
import {
	Card,
	CardMedia,
	Box,
	Typography,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Divider,
} from '@mui/material';
import placeholderImage from '../assets/placeholder.png';
import AverageRating from './AverageRating';
import ProductRating from './ProductRating';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RatingForm from './RatingForm';

function ProductItemLarge({ product }) {
	const [open, setOpen] = useState(false);
	const [refreshRating, setRefreshRating] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleRatingUpdate = () => {
		setRefreshRating((prev) => !prev);
	};

	return (
		<>
			<Card elevation={0} sx={{ ml: 2 }}>
				<Typography textAlign={'center'} variant='h3'>
					{product.title}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<CardMedia
						component='img'
						alt={product.title}
						sx={{ maxWidth: '40%', display: 'inline' }}
						image={product.imageUrl || placeholderImage}
					/>
				</Box>
				<Typography textAlign={'center'}>{product.description}</Typography>
				<Divider sx={{ my: 5 }} />
				<Typography variant='h3'>{product.price} kr</Typography>
				<Divider sx={{ my: 5 }} />
				<Box sx={{ mt: 2, mb: 2 }}>
					<AverageRating
						productId={product.id}
						refreshTrigger={refreshRating}
					/>
				</Box>
				<Box sx={{ mt: 2, mb: 2 }}>
					<Button
						color='secondary'
						variant='contained'
						onClick={handleClickOpen}
					>
						Sätt betyg
					</Button>
					<RatingForm
						productId={product.id}
						open={open}
						onClose={() => setOpen(false)}
						onRatingSubmitted={handleRatingUpdate}
					/>
					<Accordion sx={{ mt: 2 }} variant='outlined'>
						<AccordionSummary
							expandIcon={<ArrowDownwardIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography>Se betyg</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<ProductRating
								productId={product.id}
								refreshTrigger={refreshRating}
								onRatingDeleted={handleRatingUpdate}
							/>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Card>
		</>
	);
}

export default ProductItemLarge;
