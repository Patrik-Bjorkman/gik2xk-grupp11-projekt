import axios from './api';

export async function getAll(endpoint = '/products') {
	try {
		const response = await axios.get(endpoint);

		if (response.status === 200) {
			return response.data;
		} else {
			console.log(response);
			return [];
		}
	} catch (e) {
		e?.reponse ? console.log(e.response.data) : console.log(e);
	}
}

export async function getProduct(id) {
	try {
		const response = await axios.get(`/products/${id}`);

		if (response.status === 200) {
			return response.data;
		} else {
			console.log(response);
			return {};
		}
	} catch (e) {
		e?.reponse ? console.log(e.response.data) : console.log(e);
	}
}

export async function getAllRatings() {
	try {
		const response = await axios.get('/products/getAllRatings');

		if (response.status === 200) {
			return response.data;
		} else {
			console.log(response);
			return [];
		}
	} catch (e) {
		e?.reponse ? console.log(e.response.data) : console.log(e);
	}
}
