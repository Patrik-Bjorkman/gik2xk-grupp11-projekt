const db = require('../models');
const validate = require('validate.js');
const {
	createResponseSuccess,
	createResponseError,
	createResponseMessage,
} = require('../helpers/responseHelper');

async function getAll() {
	try {
		const allUsers = await db.user.findAll({ include: [db.cart] });
		return createResponseSuccess(allUsers);
	} catch (error) {
		return createResponseError(error.status, error.message);
	}
}

module.exports = { getAll };
