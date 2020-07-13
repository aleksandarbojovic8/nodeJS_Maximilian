const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://aleksandar:4Jwv0iQ7LgUve9Gh@cluster0.qm03v.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected');
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No databese found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
