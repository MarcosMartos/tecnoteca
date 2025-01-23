import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js"; // Importar las rutas correctamente

dotenv.config(); // Configurar dotenv

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));


// Rutas
app.use("/api/posts", postRoutes); // Usar las rutas importadas

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}||8080`));
