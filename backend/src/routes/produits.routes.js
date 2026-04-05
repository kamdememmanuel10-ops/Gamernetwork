const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/produits.controller');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;



router.get('/', ctrl.getAll);
module.exports = router;

router.post('/', ctrl.send);
router.get('/', ctrl.getAll);
module.exports = router;
