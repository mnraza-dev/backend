import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import passport from "passport";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200,
   }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);	
});
