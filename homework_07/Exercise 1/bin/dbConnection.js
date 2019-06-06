const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const client = new MongoClient(config.url, { useNewUrlParser: true });
let db;

module.exports = async function(req, res, next){
    try {
        if(!db){
            await client.connect();
            db = client.db(config.dbName);
            req.db = db;
        }else{
            req.db = db;
        }
        return next(); 
    } catch (error) {
        return next(new Error(' Can\'t connect to MongoDB URL')); 
    }
}