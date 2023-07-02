import express from "express";
import cors from "cors";
import { connectDb } from "./db/connect";
require("dotenv").config();
const authRoutes = require("./routes/auth");

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
