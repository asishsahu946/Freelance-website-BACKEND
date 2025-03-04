import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://asishsahu946:K7J0uvpT3fAgpiJ2@personalproject.l7iga.mongodb.net/"
);

const router = express.Router();
await client.connect();

const db = client.db("freelanceWebsite");
const collection = db.collection("freelanceUsers");

router.post("/freelance-users", async (req, res) => {
  await collection.insertOne(req.body);
  console.log(req.body);
});

export default router;