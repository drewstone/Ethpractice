var express = require('express');
var Connect = require('./blockchain/connect.js');
var Web3 = require('web3');

var web3 = new Web3();
var router = express.Router();

router.get('/', function(req, res) {
    Connect.connectToEth(function(result) {
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

router.get('/relay_test', function(req, res) {
	res.send(Connect);
});

router.get('/relay_contract', function(req, res) {
	Connect.getRelayContract(function(result) {
		if (result) {
			res.send(result);
		} else {
			res.send("Error retrieving relay contract");
		}
	});
});

module.exports = router;