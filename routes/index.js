const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log('router loaded');


router.get('/',homeController.home);
router.get('/action',homeController.action);
router.get('/action/scores',homeController.score);
module.exports=router;
