import express from 'express';
import produtoRoutes from './routes/produto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
// import categoriaController from './controllers/categoria.controller.js';

const app = express();

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.use(express.json());
app.use('/categorias', categoriaRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando');
});

const router = express.Router();

export default router;
