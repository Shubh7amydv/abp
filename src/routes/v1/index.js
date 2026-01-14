const express=require('express');
const cityControllers=require ('../../controllers/city-controller');
const airportController=require ('../../controllers/airport-controller');
const flightController=require ('../../controllers/flight-controller');
const demoController=require('../../controllers/demo-controller');

const router=express.Router();

router.post('/city', cityControllers.create);
router.get('/city/:id', cityControllers.get);
router.delete('/city/:id', cityControllers.destroy);
router.patch('/city/:id', cityControllers.update);

router.get('/city', cityControllers.getAll);  

// router.post('/airport', airportController.create);
// router.get('/airport/:id', airportController.get);

router.post('/flight', flightController.create);
router.get('/flight/:id', flightController.get);

router.post('/airport', demoController.create);





module.exports= router;
