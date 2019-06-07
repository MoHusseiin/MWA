
const config = require('./bin/config');
const mongo = require('mongodb');
const { MongoClient } = mongo;
let collection ;//= require('./bin/dbConnection');

const connect = async function() {
    const client = new MongoClient(config.url, { useNewUrlParser: true });
    await client.connect();
    const db = client.db(config.dbName);
    collection = db.collection(config.collectionName);
}

let results;

const queries = async function app(){

    // 1 find all restaurants
    // results = await collection.find({}).toArray();

    // 2 find all projection
    // results = await collection.find({}).project({"restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1}).toArray();
    
    // 3 find all projection
    // results = await collection.find({}).project({"_id" : 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1}).toArray();
    
    // 4 find all projection
    // results = await collection.find({}).project({"_id" : 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1, "address.zipcode" : true}).toArray();
    
    // 5 find all in Bronx 
    // results = await collection.find({district: "Bronx"}).toArray();

    // 6 find all in Bronx first 5
    // results = await collection.find({district: "Bronx"}).limit(5).toArray();

    // 7 find all in Bronx next 5
    // results = await collection.find({district: "Bronx"}).skip(5).limit(5).toArray();

    // 8 find all locates < -95.75
    // results = await collection.find({"address.coord" : {$lte: -95.754168  }}).project({"address.coord": 1, _id : 0}).toArray();

    // 9 
    // results = await collection.find({"cuisine" : {$ne: "American "}}, {"grades": { $elemMatch: {"score": {$gt: 70}}}}, 
    // {"address": {$elemMatch: {$lt : -65.754168}}}).toArray();

    // 10 find all name start with Wil
    // results = await collection.find({"name" : {$regex: "^Wil", $options: "i"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1}).toArray();

    // 11 find all name end with ces
    // results = await collection.find({"name" : {$regex: "ces$", $options: "i"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1}).toArray();

    // 12 find all name end with Reg
    // results = await collection.find({"name" : {$regex: ".*Reg.*"}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id:0}).toArray();

    // 13 find all district = Bronx
    // results = await collection.find({"district" : "Bronx", "cuisine": {$in: ["American ", "Chinese"]}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id:0}).toArray();

    // 14 find all district = ["Staten Island", "Queens", "Bronx", "Brooklyn"]
    // results = await collection.find({"district": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id:0}).toArray();

    // 15 find all district not in ["Staten Island", "Queens", "Bronx", "Brooklyn"]
    // results = await collection.find({"district": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id:0}).toArray();

    // 16 find all scores < 10
    // results = await collection.find({"grades": { $elemMatch: {"score": {$lte: 10}}}}).project({"restaurant_id":1, "name":1, "district":1, "cuisine":1, _id:0, "grades.score":1}).toArray();
    
    // 17 find all 2nd coord > 42 , < 52
    // results = await collection.find({"address.coord.1":{$gte: 42, $lt: 52}}).project({"restaurant_id":1, "name":1, "address.coord":1, _id:0}).toArray();

    // 18 find all with name ascending
    // results = await collection.find({}).sort({ name: 1 }).project({"name":1, _id:0}).toArray();

    // 19 find all with name descending
    // results = await collection.find({}).sort({ name: -1 }).project({"name":1, _id:0}).toArray();
    
    // 20 find all with cuisine ascending and district descending
    // results = await collection.find({}).sort({ cuisine: 1 , district: -1}).project({"cuisine":1, "district":1, _id:0}).toArray();

    // 21 find all coord is Double
    // results = await collection.find({"address.coord" : {$type : 1}}).limit(5).project({"address.coord":1, _id:0}).toArray();
    
    // 22 find all name start with Mad
    // results = await collection.find({"name" : {$regex:"^Mad"}}).limit(5).project({"name":1, "district":1, "address.coord":1, "cuisine":1, _id:0}).toArray();
    
    console.log(JSON.stringify(results, null, 1));
} 
connect().then(queries).catch(console.log); 