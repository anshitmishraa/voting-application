const MongoDB = require("mongodb");

const uri =
  "mongodb+srv://anshit:Anshit123@cluster.5eiwc.mongodb.net/voting-application?retryWrites=true&w=majority";

module.exports = async () => {
  const client = new MongoDB.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  return client.db();
};
