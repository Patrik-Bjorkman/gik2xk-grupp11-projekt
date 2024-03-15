import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { getProduct, create, update, remove } from '../services/ProductServ';

function ProductEdit() {
	const { id } = useParams();
	const navigate = useNavigate();
	const emptyProduct = {
		id: 0,
		title: '',
		description: '',
		price: 0,
		imageUrl: '',
		userId: 2,
	};
	const [product, setProduct] = useState(emptyProduct);

	useEffect(() => {
		if (id) {
			getProduct(id).then((product) => {
				const safeProduct = {
					title: '',
					description: '',
					imageUrl: '',
					price: 0,
					userId: 2,
					...product,
				};
				setProduct(safeProduct);
			});
		} else {
			setProduct(emptyProduct);
		}
	}, [id]);

	function onChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		const newProduct = { ...product, [name]: value };
		setProduct(newProduct);
	}

	function onSave() {
		if (product.id === 0) {
			create(product).then((response) => {
				navigate('/', {
					replace: true,
					state: { message: `Inlägget ${response.title} skapades.` },
				});
			});
		} else {
			update(product).then((response) =>
				navigate(`/products/${product.id}`, { replace: true, state: response })
			);
		}
	}

	function onDelete() {
		remove(product.id).then((response) =>
			navigate('/', { replace: true, state: response })
		);
	}

	return product ? (
		<>
			<Container maxWidth='lg'>
				<Typography variant='h4' component='h2' sx={{ mt: 2 }}>
					{product.id ? 'Ändra Produkt' : 'Skapa Produkt'}
				</Typography>
				<Box mt={2}>
					<form>
						<Box>
							<TextField
								fullWidth
								margin='normal'
								onChange={onChange}
								value={product.title}
								name='title'
								id='title'
								label='Titel'
							/>
						</Box>
						<Box>
							<TextField
								fullWidth
								margin='normal'
								onChange={onChange}
								value={product.description}
								multiline
								minRows={5}
								name='description'
								id='description'
								label='Beskrivning'
							/>
						</Box>
						<Box>
							<TextField
								fullWidth
								margin='normal'
								onChange={onChange}
								value={product.price}
								name='price'
								id='price'
								label='Pris'
							/>
						</Box>
						<Box>
							<TextField
								fullWidth
								margin='normal'
								onChange={onChange}
								value={product.imageUrl}
								name='imageUrl'
								id='imageUrl'
								label='Sökväg till bild'
							/>
						</Box>
						<Box display='flex' mt={2}>
							<Box flexGrow={1}>
								<Button
									startIcon={<ChevronLeftIcon />}
									sx={{ mr: 1 }}
									variant='contained'
									onClick={() => navigate(-1)}
								>
									Tillbaka
								</Button>
								{id && (
									<Button
										startIcon={<DeleteIcon />}
										onClick={onDelete}
										variant='contained'
										color='error'
									>
										Ta bort
									</Button>
								)}
							</Box>
							<Button
								startIcon={<SaveIcon />}
								onClick={onSave}
								variant='contained'
								color='success'
							>
								Spara
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
		</>
	) : (
		<h3>Kunde inte hämta produkt.</h3>
	);
}

export default ProductEdit;
