import { Link, Outlet } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SaveAsIcon from '@mui/icons-material/SaveAs';

function App() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							<Link to='/'>Webbshop</Link>
						</Typography>
						<Button   color='secondary' variant="contained"startIcon={<SaveAsIcon />}>
							<Link to='/products/new'>Skapa Produkt</Link>
						</Button>
						<Button sx={{ m: 2 }} color='success' variant='contained' startIcon={<ShoppingCartIcon />}>
							<Link to='/carts/1'>Kundvagn</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Outlet />
		</>
	);
}

export default App;
