import { MongoClient } from "mongodb";
import bulkWriteInsert  from "./queries/bulkWriteInsert.js";

// Replace the uri string with your connection string.
const uri =
    "mongodb://user:admin@localhost:27017/?authMechanism=DEFAULT";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("sandbox");
        const clients = database.collection("clients");

        await bulkWriteInsert(clients, 100);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);
