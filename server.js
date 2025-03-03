import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Allows all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200).json({message: "Server is running"});
});

app.listen(4000, () => {
  console.log("Server Started on port 4000");
});