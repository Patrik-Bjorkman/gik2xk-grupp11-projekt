import {Grid, Paper, Typography } from '@mui/material';
import ProductList from '../components/ProductList';

function Home() {
	return (
		<>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				<Grid component='section' item sx={8}>
					<Paper elevation={8} sx={{ p: 2, mt: 8, borderradius: 5 }}>
					<Typography variant='h5'>
						 Produkter
					</Typography>
				
			<ProductList />
			</Paper>
			
			</Grid>
			</Grid>
	


		</>
	);
}

export default Home;
