import express from 'express';
import produtoController from '../controllers/produto.controller.js';
import uploadImage from '../middlewares/uploadImage.middleware.js';

const router = express.Router();

router.get('/', produtoController.listarProdutos);
router.post('/', uploadImage, produtoController.criarProduto);
router.put('/:id', uploadImage, produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProduto);

export default router;
