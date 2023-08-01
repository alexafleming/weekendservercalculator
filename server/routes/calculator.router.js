const express = require('express');
const router = express.Router();
let calculatorEqual = 0

//get request
router.get('/', (req, res) => {
    console.log('GET request made');
    res.send(calculatorEqual);
});

//post request
router.post()
module.exports = router;