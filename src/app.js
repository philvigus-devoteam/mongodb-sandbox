const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
    "mongodb://user:admin@localhost:27017/?authMechanism=DEFAULT";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("sandbox");
        console.log("connected");

        const clients = database.collection("clients");

        const newClient = {
            name: "Phil Vigus",
            age: 47
        }

        const savedClientId = await clients.insertOne(newClient);

        console.log(savedClientId)

        // const movie = await movies.findOne(query);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
