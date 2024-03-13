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
			rating: parseInt(value, 10), // Ensure rating is an integer
			comment: comment,
		};

		addRating(productId, ratingData)
			.then(() => {
				console.log(`Rating and comment submitted: ${value} and ${comment}`);
				onRatingSubmitted(); // Notify parent component
				onClose(); // Close the dialog after successful submission
			})
			.catch((error) => {
				console.error('Failed to add rating', error);
			});
	};
	return (
		<>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={onClose} // Use passed onClose prop here
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>{'Sätt betyg'}</DialogTitle>
				<form onSubmit={handleSubmit}>
					{' '}
					{/* Wrap dialog content in a form */}
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
								</Button>{' '}
								{/* Use type="submit" to submit the form */}
							</Box>
						</Container>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
}

export default RatingForm;
