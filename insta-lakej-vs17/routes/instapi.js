"use strict";
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.send("Instagram API test resource");
});
router.get('/photos', function (req, res) {
    var username = req.query.username;
    res.send("Instagram API test resource. Username = " + username);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=instapi.js.map