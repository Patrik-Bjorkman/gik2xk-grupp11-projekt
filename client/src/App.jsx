import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' sx={{ borderRadius: 2 }}>
					<Toolbar>
						<Grid container spacing={2} alignItems='center'>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant='h1'
									component='div'
									sx={{ flexGrow: 1, textAlign: 'center' }}
								>
									<Link
										to='/'
										style={{ color: 'inherit', textDecoration: 'none' }}
									>
										Webbshop
									</Link>
								</Typography>
							</Grid>
							<Grid
								item
								container
								xs={12}
								sm={12}
								md={6}
								justifyContent='center'
								spacing={2}
							>
								<Grid item sx={{ mb: 2 }}>
									<Button
										color='secondary'
										variant='contained'
										startIcon={<SaveAsIcon />}
									>
										<Link
											to='/products/new'
											style={{ color: 'inherit', textDecoration: 'none' }}
										>
											Skapa Produkt
										</Link>
									</Button>
								</Grid>
								<Grid item>
									<Button
										color='success'
										variant='contained'
										startIcon={<ShoppingCartIcon />}
									>
										<Link
											to='/carts/new'
											style={{ color: 'inherit', textDecoration: 'none' }}
										>
											Kundvagn
										</Link>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</Box>

			<Outlet />
			<Grid container component='footer' sx={{ mt: 4 }} justifyContent='center'>
				<Grid>
					<Typography variant='body2' color='textSecondary'>
						Kontakta oss
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
