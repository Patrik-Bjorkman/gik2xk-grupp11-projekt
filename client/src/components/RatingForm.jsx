import {
	Slide,
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	TextField,
	Rating,
	Box,
	Container,
} from '@mui/material';
import { forwardRef } from 'react';
import { useState } from 'react';
import { addRating } from '../services/ProductServ';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function RatingForm({ productId, open, onClose, onRatingSubmitted }) {
	const [value, setValue] = useState(0);
	const [comment, setComment] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const ratingData = {
			rating: parseInt(value, 10),
			comment: comment,
		};

		addRating(productId, ratingData)
			.then(() => {
				onRatingSubmitted();
				onClose();
			})
			.catch((error) => {
				console.error('Misslyckades att lägga till betyg', error);
			});
	};
	return (
		<>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={onClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>{'Sätt betyg'}</DialogTitle>
				<form onSubmit={handleSubmit}>
					{' '}
					<DialogContent>
						<Rating
							name='simple-controlled'
							required
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>
						<TextField
							multiline={true}
							rows={2}
							autoFocus
							margin='dense'
							id='comment'
							name='comment'
							label='Kommentar (Frivilligt)'
							type='text'
							fullWidth
							variant='standard'
							value={comment} // Control this component with state
							onChange={(e) => setComment(e.target.value)} // Update state on change
						/>
					</DialogContent>
					<DialogActions>
						<Container>
							<Box display='flex' justifyContent='space-between' mb={4}>
								<Button
									variant='contained'
									color='error'
									startIcon={<CancelIcon />}
									onClick={onClose}
								>
									Avbryt
								</Button>
								<Button
									color='success'
									variant='contained'
									startIcon={<SaveIcon />}
									type='submit'
								>
									Skapa
								</Button>
							</Box>
						</Container>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
}

export default RatingForm;
