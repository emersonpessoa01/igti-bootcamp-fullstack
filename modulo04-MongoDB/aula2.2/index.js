const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopogy: true,
});

client.connect(async (err) => {
  const collection = client.db("grades").collection("student");

  const documents = await collection.find().toArray();
  console.log(documents);

  client.close();
});
