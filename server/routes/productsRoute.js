const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('Get all products');
});

router.post('/', (req, res) => {
	res.send(req.body);
});

router.put('/', (req, res) => {
	res.send('Put products');
});

router.delete('/', (req, res) => {
	res.send('Delete products');
});

module.exports = router;
