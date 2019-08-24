const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log('router loaded');


//router.get('/',homeController.home);
router.get('/signup',homeController.signup);

router.get('/signin',homeController.signin);
router.post('/create',homeController.create);
router.post('/createsession',homeController.createSession);
router.get('/action/scores',homeController.score);
router.use('/users',require('./users'));
// for any further routes,access from here
// router.use('/routername',require('./routerfile));
module.exports=router;
