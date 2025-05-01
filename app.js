import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: process.env.ORIGIN,
    
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);	
});
