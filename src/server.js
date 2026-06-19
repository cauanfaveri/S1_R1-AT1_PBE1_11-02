import express from 'express';
import path from 'path';
import produtoRoutes from './routes/produto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import { initializeDatabase } from './config/db.js';
// import categoriaController from './controllers/categoria.controller.js';

const app = express();

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.use('/images', express.static(path.join(process.cwd(), 'uploads/Images')));

app.use(express.json());
app.use('/categorias', categoriaRoutes);

initializeDatabase().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
    });
}).catch(err => {
    console.error("Erro ao inicializar o banco de dados:", err);
});
