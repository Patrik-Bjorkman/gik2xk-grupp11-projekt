import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to='/'>Webbshop</Link>
            </Typography>
            <Button
              color='secondary'
              variant='contained'
              startIcon={<SaveAsIcon />}
            >
              <Link to='/products/new'>Skapa Produkt</Link>
            </Button>
            <Button
              sx={{ m: 2 }}
              color='success'
              variant='contained'
              startIcon={<ShoppingCartIcon />}
            >
              <Link to='/carts/new'>Kundvagn</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
      <Grid container component="footer" sx={{ mt: 4 }} justifyContent="center">
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Kontakta oss
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;