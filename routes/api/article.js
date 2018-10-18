const axios = require('axios');
const router = require('express').Router();

const authKey = '';
//NEEDS LINK FOR SCRAPING & API KEY
//https://stackoverflow.com/questions/47239812/how-do-i-parse-multiple-pages
const queryURLBase = '' +
    authKey + '&q=';

router.get('/call', (req, res) => {
    axios
        .get(queryURLBase + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)));
});

module.exports = router;