import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((err) => {
      console.log("Error al conectar a MongoDB:", err);
    });
};
