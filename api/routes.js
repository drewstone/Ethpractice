var express = require('express');
var Connect = require('./blockchain/connect.js');
var Web3 = require('web3');

var web3 = new Web3();
var router = express.Router();

router.get('/', function(req, res) {
    Connect.connectToRelay(function(result) {
        if (result) {
        	res.render('index', 
        		{
        			contract: JSON.stringify(Connect.relay_contract),
        		});
        } else {
            res.send("Connecting to Ethereum failed");
        }
    });
});

module.exports = router;