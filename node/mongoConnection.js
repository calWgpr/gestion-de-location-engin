//allow to connect to db
const { MongoClient } = require("mongodb");

//@ts-check variables

var dbConn = null;

//connection object
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/ihmproject")
      .then((client) => {
        dbConn = client.db();
        return cb();
      })
      .catch((err) => {
        console.log("impossible to connect to the database: ", err);
        return cb(err);
      });
  },

  getDb: () => {
    return dbConn;
  },
};
