var express = require('express');
var router = express.Router();
var Hero = require("../models/hero").Hero
var async = require("async")
var checkAuth = require("../middleware/checkAuth.js")



/* GET hero listing. */
router.get('/', function (req, res, next) {
    res.send('<h1>Это экран для списка персонажей</h1>');
});

/* Страница героев */
router.get("/:nick", checkAuth, function (req, res, next) {
    Hero.findOne({ nick: req.params.nick }, function (err, hero) {
        if (err) return next(err)
        if (!hero) return next(new Error("Герой не найден"))
        res.render('hero', {
            title: hero.title,
            picture: hero.avatar,
            desc: hero.desc,
        });
    })
});

module.exports = router;
