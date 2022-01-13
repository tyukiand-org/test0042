var express = require('express');
var fs = require('fs');
let app = express();
var router = express.Router();

var h = function (req, res) {
  fs.readFileSync(req.query.path);
}

router.get("/notgood", h);

