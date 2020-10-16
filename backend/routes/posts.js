const express = require('express');
const verify = require('./verify');

const router = express.Router();

router.get('/',verify,(req,res) => {
   //verify
});

module.exports = router;