var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data})
    });
});

