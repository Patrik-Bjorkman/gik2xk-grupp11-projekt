const db = require('../models');
const validate = require('validate.js');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');
const constraints = {
	title: {
		length: {
			maximum: 100,
			tooLong: '^Titeln får inte vara längre än %{count} tecken lång.',
		},
	},
	imageUrl: {
		url: {
			message: '^Sökvägen är felaktig.',
		},
	},
};

async function getById(id) {
	try {
		const allProducts = await db.product.findOne({ where: { id } });
		return createResponseSuccess(allProducts);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function getAll() {
	try {
		const allProducts = await db.product.findAll({
			include: [db.rating, db.cart],
		});
		return createResponseSuccess(allProducts);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function create(product) {
	const invalidData = validate(product, constraints);

	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const newProduct = await db.product.create(product);
		return createResponseSuccess(newProduct);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function update(product, id) {
	const invalidData = validate(product, constraints);
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		await db.product.update(product, {
			where: {
				id,
			},
		});
		return createResponseMessage(200, 'Produkten uppdaterades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function destroy(id) {
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	try {
		await db.product.destroy({
			where: {
				id,
			},
		});
		return createResponseMessage(200, 'Produkten raderades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

// async function addToCart(product, id) {
// 	try {
// 		const product = await db.product.findByPk(id);
// 		const cart = await db.cart.findByPk(product.cartId);
// 		cart.addProduct(product);
// 		return createResponseSuccess(product);
// 	} catch (error) {
// 		return createResponseError(error.status, error.message);
// 	}
// }

module.exports = {
	getById,
	getAll,
	create,
	update,
	destroy,
	// addToCart,
};
