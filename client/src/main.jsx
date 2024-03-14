import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductEdit from './views/ProductEdit.jsx';
import Home from './views/Home.jsx';
import Products from './views/Products.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import Carts from './views/Carts.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, teal, grey, blue } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#f3f3f3',
			paper: grey[50],
		},
		primary: {
			main: blue[900],
		},
		secondary: {
			main: blue[200],
		},
		sucess: {
			main: teal[300],
		},
	},
	body1: { color: blueGrey[700] },
	body2: { color: blueGrey[800] },
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/products/:id/edit', element: <ProductEdit /> },
			{ path: '/products/new', element: <ProductEdit /> },
			{ path: '/products/', element: <Products /> },
			{ path: '/products/:id', element: <ProductDetail /> },
			{ path: '/carts/new', element: <Carts /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
