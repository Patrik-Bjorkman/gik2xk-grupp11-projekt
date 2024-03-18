import { Container, Grid, Paper, Typography } from '@mui/material';
import ProductList from '../components/ProductList';

function Home() {
	return (
		<>
			<Grid component='section'>
				<Paper elevation={5} sx={{ p: 2, mt: 8, borderRadius: 2 }}>
					<Container>
						<Typography variant='h5' sx={{ mb: 2 }}>
							Alla Produkter
						</Typography>

						<ProductList />
					</Container>
				</Paper>
			</Grid>
		</>
	);
}

export default Home;
