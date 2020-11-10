const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://emersonpessoa:salmo119@cluster0.cginj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopogy: true,
});

client.connect(async (err) => {
  //obtendo collection account
  const collection = client.db("api").collection("account");

  // const documents = await collection.find().toArray();
  const documents = await collection.find().toArray();
  console.log(documents);

  //conectar como  adm na base de dados p/ visualizar as base existentes
  //obter listas dos bancos no servidor conectado
  const databaselist = await client.db().admin().listDatabases();
  console.log("Databases:");

  databaselist.databases.forEach(({ name }) => {
    console.log(`- ${name}`);
  });

  client.close();
});
