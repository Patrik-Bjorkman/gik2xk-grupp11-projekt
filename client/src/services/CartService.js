import axios from './api';

export async function getCart() {
	try {
		const response = await axios.get(`/carts/1/getCartRows`);

		if (response.status === 200) return response.data;
		else {
			console.log(response.data);
			return [];
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}

export async function addProductToCart(productId, userId, amount = 1) {
	try {
		const response = await axios.post(`/carts/1/addProduct/`, {
			productId,
			userId,
			amount,
		});

		if (response.status === 200) return response.data;
		else {
			console.log(response.data);
			return [];
		}
	} catch (e) {
		e?.response ? console.log(e.response.data) : console.log(e);
	}
}
