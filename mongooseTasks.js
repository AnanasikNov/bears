var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Hero = require("./models/hero").Hero

var hero = new Hero({
    title: "Пятачок",
    nick: "pig"
})

console.log(hero)
hero.save(function () {
    console.log(arguments)
})