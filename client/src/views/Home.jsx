import { Container, Grid, Paper, Typography } from '@mui/material';
import ProductList from '../components/ProductList';

function Home() {
	return (
		<>
			{/* <Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			> */}
			<Grid component='section'>
				<Paper elevation={5} sx={{ p: 2, mt: 8, borderRadius: 2 }}>
					<Container>
						<Typography variant='h5' sx={{ mb: 2,}} >
							Alla Produkter
						</Typography>

						<ProductList />
					</Container>
				</Paper>
			</Grid>
			{/* </Grid> */}
		</>
	);
}

export default Home;
