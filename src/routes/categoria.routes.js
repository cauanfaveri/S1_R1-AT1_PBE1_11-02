import express from 'express';
import categoriaController from '../controllers/categoria.controller.js';

const router = express.Router();

router.get('/', categoriaController.listarCategorias);
router.post('/', categoriaController.criarCategoria);
router.put('/:id', categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.deletarCategoria);

export default router;
