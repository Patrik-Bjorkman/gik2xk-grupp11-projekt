import { Link, Outlet } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Grid,
	Divider,
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

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
			<Box
				component='footer'
				sx={{ mt: 4, bgcolor: 'background.paper', padding: 3 }}
			>
				<Grid container spacing={4} justifyContent='center'>
					<Grid item xs={12} sm={4}>
						<Typography variant='h6' color='textPrimary' gutterBottom>
							Kontaktinformation
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							<LocationOnIcon fontSize='small' /> Gatuadress 123, 123 45 Stad
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							<MailOutlineIcon fontSize='small' /> email@example.com
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							<PhoneIcon fontSize='small' /> 012-345 67 89
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant='h6' color='textPrimary' gutterBottom>
							Snabblänkar
						</Typography>
						<Link
							href='/'
							color='textSecondary'
							display='block'
							variant='body2'
						>
							<Typography>Om Oss</Typography>
						</Link>
						<Link
							href='/'
							color='textSecondary'
							display='block'
							variant='body2'
						>
							<Typography>Tjänster</Typography>
						</Link>
						<Link
							href='/'
							color='textSecondary'
							display='block'
							variant='body2'
						>
							<Typography>Support</Typography>
						</Link>
						<Link
							href='/'
							color='textSecondary'
							display='block'
							variant='body2'
						>
							<Typography>FAQ</Typography>
						</Link>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant='h6' color='textPrimary' gutterBottom>
							Om Webbshopen
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							Vår webbshop erbjuder det senaste inom elektronik och andra roliga
							prylar. Vi strävar efter att ge våra kunder den bästa upplevelsen
							och de bästa produkterna.
						</Typography>
					</Grid>
				</Grid>
				<Divider sx={{ mt: 3, mb: 2 }} />
				<Typography variant='body2' color='textSecondary' align='center'>
					© {new Date().getFullYear()} Webbshop AB. Alla rättigheter
					förbehållna.
				</Typography>
			</Box>
		</>
	);
}

export default App;
