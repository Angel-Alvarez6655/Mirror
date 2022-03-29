const express = require('express');
const router = express.Router();
const viejasController = require('../Controllers/viejas.controller');

router.get('/:id', viejasController.getVieja);
router.get('/', viejasController.getViejas);
router.post('/',viejasController.insertViejas);
router.put('/:id',viejasController.updateViejas);
router.delete('/:id',viejasController.deleteViejas);

module.exports = router;