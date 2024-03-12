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
	rating: {
		length: {
			maximum: 1,
			tooLong: '^Betyget får inte vara längre än %{count} tecken lång.',
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

async function getAllRatings() {
	try {
		const allRatings = await db.rating.findAll({});
		return createResponseSuccess(allRatings);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function getProductRatings(id) {
	try {
		const ratings = await db.rating.findAll({
			where: {
				productId: id,
			},
		});
		return createResponseSuccess(ratings);
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

async function addRating(rating) {
	const invalidData = validate(rating, constraints);

	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const newRating = await db.rating.create(rating);
		return createResponseSuccess(newRating);
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

async function updateRating(id, productId, rating, comment) {
	const ratingData = { rating, comment };
	const invalidData = validate(ratingData, constraints);

	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		const [affectedRows] = await db.rating.update(ratingData, {
			where: {
				id,
				productId,
			},
		});
		if (affectedRows > 0) {
			return createResponseMessage(200, 'Betygsättningen uppdaterades');
		} else {
			return createResponseError(
				404,
				'Ingen betygsättning hittades med angivet id'
			);
		}
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function destroyRating(id, productId) {
	if (!productId) {
		return createResponseError(422, 'ProduktId är obligatoriskt');
	}
	if (!id) {
		return createResponseError(422, 'BetygsättningId är obligatoriskt');
	}
	try {
		await db.rating.destroy({
			where: {
				id,
				productId,
			},
		});
		return createResponseMessage(200, `Betygsättning med id:${id} raderades`);
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

module.exports = {
	getById,
	getAll,
	getProductRatings,
	getAllRatings,
	create,
	addRating,
	update,
	updateRating,
	destroyRating,
	destroy,
	// addToCart,
};
