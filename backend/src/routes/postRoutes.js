import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js"; // Asegúrate de incluir la extensión .js

const router = express.Router();

// Rutas CRUD
router.get("/", getPosts);           // Obtener todos los posts
router.get("/:id", getPostById);     // Obtener un post por ID
router.post("/", createPost);        // Crear un nuevo post
router.put("/:id", updatePost);      // Actualizar un post
router.delete("/:id", deletePost);   // Eliminar un post

export default router;

