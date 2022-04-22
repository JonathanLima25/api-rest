import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get("/autores", AutorController.listarAutors)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizaAutor)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;