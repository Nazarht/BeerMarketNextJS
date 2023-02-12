import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Nazarka:Aa28502850@cluster0.alynilr.mongodb.net/beers?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("beers");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Beer data sent succefully'});
  }
}

export default handler;
