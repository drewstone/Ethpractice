var express = require('express');
var Connect = require('./blockchain/connect.js');

var router = express.Router();

router.get('/', function(req, res) {
    Connect.connectToEth(function(result) {
        if (result) {
        	res.send(result);
        } else {
            res.send("Connecting to Ethereum failed");
        }
    });
});

router.get('/relay_test', function(req, res) {
	Connect.connectToRelay(function(result) {
		if (result) {
			res.send(result);
		} else {
			res.send("Connection to relay contract failed");
		}
	});
});

module.exports = router;