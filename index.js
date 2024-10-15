import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectToDB from "./db/connectionDB.js";
import route from "./route/userRoute.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
connectToDB();

app.use("/api/user", route);
app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});
