import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
const uri = "mongodb+srv://brianouyang17:jHHNOeH7tTH2mG9I@cluster0.udt9pvf.mongodb.net/booksApp?retryWrites=true&w=majority&appName=booksApp" || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("books");

export default db;