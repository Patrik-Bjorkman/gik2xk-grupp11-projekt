const router = require('express').Router();
const productService = require('../services/productService');

router.get('/getAllRatings', (req, res) => {
	productService.getAllRatings().then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/', (req, res) => {
	productService.getAll().then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	productService.getById(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.get('/:id/getProductRatings', (req, res) => {
	const id = req.params.id;
	productService.getProductRatings(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.post('/:id/addRating', (req, res) => {
	const rating = req.body.rating;
	const productId = req.params.id;
	const comment = req.body.comment;
	productService
		.addRating({ productId: productId, rating: rating, comment: comment })
		.then((result) => {
			res.status(result.status).json(result.data);
		});
});

router.post('/', (req, res) => {
	const product = req.body;
	productService.create(product).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.put('/', (req, res) => {
	const product = req.body;
	const id = product.id;
	productService.update(product, id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.put('/:id/updateRating', (req, res) => {
	const productId = req.params.id;
	const { id, rating, comment } = req.body;
	productService.updateRating(id, productId, rating, comment).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.delete('/', (req, res) => {
	const id = req.body.id;
	productService.destroy(id).then((result) => {
		res.status(result.status).json(result.data);
	});
});

router.delete('/:id/destroyRating', (req, res) => {
	const productId = req.params.id;
	const ratingId = req.body.ratingId;
	productService.destroyRating(ratingId, productId).then((result) => {
		res.status(result.status).json(result.data);
	});
});

module.exports = router;
