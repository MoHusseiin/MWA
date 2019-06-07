const MongoClient = require('mongodb');
const config = require('./config');

const Connect = async function() {
    try {
        const client = new MongoClient(config.url, { useNewUrlParser: true });
        await client.connect();
        const db = client.db(config.dbName);
        return db.collection(config.collectionName);
    } catch (error) {
        console.log('Error', error.message);
    }
}
module.exports = Connect;