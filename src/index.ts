import express from "express";
import cors from "cors";
import { connectDb } from "./db/connect";
require("dotenv").config();
const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
