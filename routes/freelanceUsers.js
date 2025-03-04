import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://asishsahu946:K7J0uvpT3fAgpiJ2@personalproject.l7iga.mongodb.net/"
);

const router = express.Router();
await client.connect();

const db = client.db("freelanceWebsite");
const collection = db.collection("users");

router.post("/create-user", async (req, res) => {
  await collection.insertOne(req.body);
  res.status(200).json({ message: "User created successfully" });
  console.log(req.body);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await collection.findOne({ email, password });
  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(200).json({ message: "Invalid email or password" });
  }
});

router.get("/get-user/:id", async (req, res) => {
  const users = await collection.find({ _id: new ObjectId(req.params.id) }).toArray();
  res.status(200).json(users);
})

export default router;