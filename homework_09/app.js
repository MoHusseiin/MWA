
const config = require('./bin/config');
const mongo = require('mongodb');
const { MongoClient } = mongo;
let collection ;

const connect = async function() {
    const client = new MongoClient(config.url, { useNewUrlParser: true });
    await client.connect();
    const db = client.db(config.dbName);
    collection = db.collection(config.collectionName);
}

let results;

const queries = async function app(){

    // 1 find all zipcodes in WA
    // results = await collection.aggregate([
    //     {
    //         $match:{ state : "WA"}
    //     },
    //     {
    //         $group:{
    //             _id : {'State': "$state"},
    //             zipcode: {$addToSet: "$_id"}
    //         }
    //     }
    // ]).toArray();

    // 2 find all pop < 5000
    // results = await collection.aggregate([
    //     {
    //         $match:{ pop : {$lte : 5000}}
    //     },
    //     {
    //         $project:{
    //             _id : 0,
    //             'details':  {'zipCode':'$_id', 'population': '$pop'}
    //         }
    //     }
    // ]).toArray();

    // 3 find all cities has more than one zipcode
    // results = await collection.aggregate([
    //     {
    //        $group:{
    //            _id: {'city':"$city", 'state': "$state"},
    //            zipCode_count: { $sum: 1}
    //        }
    //     },
    //     {
    //         $match:{ "zipCode_count": {$gt : 1}}
    //     },
    //     {
    //         $sort: {"_id.state" : 1, "_id.city": 1}
    //     }
    // ]).toArray();

    // 4 find lest pop city in each state
    results = await collection.aggregate([
        {
           $group:{
               _id: {'city':"$city", 'state': "$state"},
               population: { $sum: "$pop"}
           }
        },
        {
            $sort: {"population" : 1, "_id.state": 1}
        },
        {
            $group:{
                _id: {'state': "$_id.state"},
                city: {$first:  "$_id.city" },
                population: {$first: "$population" },
            }
        },
        {
            $sort:{"_id.state": 1}
        }
    ]).toArray();
    
    console.log(JSON.stringify(results, null, 1));
} 
connect().then(queries).catch(console.log); 