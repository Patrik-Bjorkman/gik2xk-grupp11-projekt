const db = require('../models');
const validate = require('validate.js');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');

async function getAll() {
	try {
		const allCarts = await db.cart.findAll({});
		return createResponseSuccess(allCarts);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function getById(id) {
	try {
		const cart = await db.cart.findByPk(id);
		return createResponseSuccess(cart);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function getCartRows(id) {
	try {
		const cartRows = await db.cartRow.findAll({
			where: {
				cartId: id,
			},
		});
		return createResponseSuccess(cartRows);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function addProduct(cartId, userId, productId, amount) {
	if (!userId) {
		return createResponseError(422, 'AnvändarId är obligatoriskt');
	}
	if (!productId) {
		return createResponseError(422, 'ProduktId är obligatoriskt');
	}
	if (!amount) {
		return createResponseError(422, 'Antal är obligatoriskt');
	}
	const [cart, created] = await db.cart.findOrCreate({
		where: { userId: userId },
		defaults: { userId: userId },
	});
	console.log(cart, created);
	// Försök hitta en befintlig cartRow med cartId och productId
	const existingCartRow = await db.cartRow.findOne({
		where: { cartId: cartId, productId: productId },
	});

	if (existingCartRow) {
		// Konvertera både existingCartRow.amount och amount till tal innan addition
		const updatedAmount =
			parseInt(existingCartRow.amount, 10) + parseInt(amount, 10);
		existingCartRow.amount = updatedAmount;
		await existingCartRow.save();
		return createResponseSuccess(existingCartRow);
	} else {
		// Om ingen cartRow finns, skapa en ny
		try {
			// Se till att amount är ett tal
			const newAmount = parseInt(amount, 10);
			const newCartRow = await db.cartRow.create({
				cartId: cart.id, // Använd cart.id här om cart är objektet du vill ha id från
				productId: productId,
				amount: newAmount,
			});
			return createResponseSuccess(newCartRow);
		} catch (error) {
			// Hantera andra möjliga fel
			return createResponseError(error.status || 500, error.message);
		}
	}
}

async function create(cart) {
	// const invalidData = validate(cart);

	// if (invalidData) {
	// 	return createResponseError(422, invalidData);
	// }
	try {
		const newCart = await db.cart.create(cart);
		return createResponseSuccess(newCart);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function update(cart, id) {
	const invalidData = validate(cart);
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	if (invalidData) {
		return createResponseError(422, invalidData);
	}
	try {
		await db.cart.update(cart, {
			where: {
				id,
			},
		});
		return createResponseMessage(200, 'Varukorgen uppdaterades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function destroyCartRow(cartId, productId) {
	if (!cartId) {
		return createResponseError(422, 'VarukorgsId är obligatoriskt');
	}
	if (!productId) {
		return createResponseError(422, 'ProduktId är obligatoriskt');
	}
	try {
		await db.cartRow.destroy({
			where: {
				cartId,
				productId,
			},
		});
		return createResponseMessage(200, 'Varukorgsraden raderades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

async function destroy(id) {
	if (!id) {
		return createResponseError(422, 'Id är obligatoriskt');
	}
	try {
		await db.cart.destroy({
			where: {
				id,
			},
		});
		return createResponseMessage(200, 'Varukorgen raderades');
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

module.exports = {
	getAll,
	getById,
	getCartRows,
	create,
	addProduct,
	update,
	destroyCartRow,
	destroy,
};
