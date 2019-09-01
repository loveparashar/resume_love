const express=require('express');

const router=express.Router();
const passport=require('passport');
const homeController=require('../controllers/home_controller');
console.log('router loaded');

router.use('/posts',require('./posts'));
router.get('/',passport.checkAuthentication,homeController.home);
router.get('/signup',homeController.signup);
router.get('/signin',homeController.signin);
router.post('/create',homeController.create);
//use passport as a middleware to authenticte
router.post('/createsession',passport.authenticate(
    'local',
    {failureRedirect:'/signin'},
),homeController.createSession);
router.get('/signout',homeController.destroySession);
router.use('/users',require('./users'));
// for any further routes,access from here
// router.use('/routername',require('./routerfile));
module.exports=router;
