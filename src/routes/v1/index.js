const express=require('express');
const cityControllers=require ('../../controllers/city-controller');

const router=express.Router();

router.post('/city', cityControllers.create);
router.get('/city/:id', cityControllers.get);
router.delete('/city/:id', cityControllers.destroy);
router.patch('/city/:id',cityControllers.update);

// router.update('/city', cityControllers);

module.exports= router;
