
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const databaseName = 'task-manager';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    await client.connect();

    const db = client.db(databaseName);
    const mycol = db.collection('users');
    await mycol.insertOne({
      name: 'Virh',
      age: 21
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      throw new Error('Unable to insert user');
    })
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    console.log('Error occured');
  } 
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
