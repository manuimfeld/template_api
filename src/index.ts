import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Aquí puedes definir tus rutas y lógica de negocio

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
