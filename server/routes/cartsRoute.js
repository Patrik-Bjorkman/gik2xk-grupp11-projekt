const router = require('express').Router();
const cartService = require('../services/cartService');

router.get('/', (req, res) => {
	cartService.getAll().then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	cartService.getById(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/:id/getCartRows', (req, res) => {
	const id = req.params.id;
	cartService.getCartRows(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.post('/', (req, res) => {
	const cart = req.body;
	cartService.create(cart).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.post('/:id/addProduct', (req, res) => {
	const productId = req.body.productId;
	const id = req.params.id;
	const userId = req.body.userId;
	const amount = req.body.amount;
	cartService.addProduct(id, userId, productId, amount).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.put('/:id', (req, res) => {
	const cart = req.body;
	const id = req.params.id;
	cartService.update(cart, id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.delete('/:id/destroyCartRow', (req, res) => {
	const id = req.params.id;
	const productId = req.body.productId;
	cartService.destroyCartRow(id, productId).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	cartService.destroy(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

module.exports = router;
