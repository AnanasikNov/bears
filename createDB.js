const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
var data = require("./data.js").data
// Подключаемся к серверу
mongoClient.connect(function (err, client) {
    // обращаемся к базе данных admin
    const db = client.db("all");
    db.dropDatabase();
    var collection = db.collection("heroes");
    collection.insertMany(data, function (err, result) {
        client.close();
    })
})