const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');
const userService = require('../services/userService');

const constraints = {
	email: {
		length: {
			minimum: 4,
			maximum: 200,
			tooShort: '^E-postadressen måste vara minst %{count} tecken lång.',
			tooLong: '^E-postadressen får inte vara längre än %{count} tecken lång.',
		},
		email: {
			message: '^E-postadressen är i ett felaktigt format.',
		},
	},
};

router.get('/', (req, res) => {
	userService.getAll().then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/:id', (req, res) => {
	db.user.findByPk(req.params.id).then((result) => {
		res.send(result);
	});
});

router.get('/:id/getCarts', (req, res) => {});

router.post('/', (req, res) => {
	const user = req.body;
	const invalidData = validate(user, constraints);

	if (invalidData) {
		res.status(400).json(invalidData);
	} else {
		db.user.create(user).then((result) => {
			res.send(result);
		});
	}
});

router.put('/', (req, res) => {
	const user = req.body;
	const invalidData = validate(user, constraints);
	const id = user.id;

	if (invalidData || !id) {
		res.status(400).json(invalidData || 'Id är obligatoriskt');
	} else {
		db.user
			.update(user, {
				where: {
					id: user.id,
				},
			})
			.then((result) => {
				res.send(result);
			});
	}
});

router.delete('/', (req, res) => {
	db.user
		.destroy({
			where: {
				id: req.body.id,
			},
		})
		.then(() => {
			res.json(`Användaren togs bort`);
		});
});

module.exports = router;
