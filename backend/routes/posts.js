const express = require('express');
const verify = require('./verify');

const router = express.Router();

router.get('/',verify,(req,res) => {
    res.json({posts:{title:'First post',description:"DATA NOT ALLOWED"}});
});

module.exports = router;