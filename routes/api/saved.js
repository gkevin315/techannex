const axios = require('axios');
const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

router 
    .route('/')
    .get(articlesController.findAll)
    .post(articlesController.create);

router
    .router('/:id')
    .delete(articlesController.remove);

module.exports = router; 