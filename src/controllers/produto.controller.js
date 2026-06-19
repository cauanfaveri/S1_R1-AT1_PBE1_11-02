import produtosModel from "../models/produto.model.js";

const produtoController = {

    criarProduto: async (req, res) => {
        try {
            const imageName = req.file ? req.file.filename : null;

            const produto = {
                nomeProduto: req.body.nomeProduto, idCategoria: req.body.idCategoria, valorProduto: req.body.valorProduto, vinculoImagem: imageName
            };
            const result = await produtosModel.insert(produto);
            res.status(201).json(result);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    listarProdutos: async (req, res) => {
        const produtos = await produtosModel.selectAll();
        res.json(produtos);
    },
    atualizarProduto: async (req, res) => {
        const id = req.params.id;
        const imageName = req.file ? req.file.filename : null;

        const produto = {
            nomeProduto: req.body.nomeProduto, idCategoria: req.body.idCategoria, valorProduto: req.body.valorProduto, vinculoImagem: imageName
        };
        const result = await produtosModel.update(id, produto);

        res.json(result);
    },
    deletarProduto: async (req, res) => {
        const id = req.params.id;
        const result = await produtosModel.delete(id);
        res.json(result);
    }
};

export default produtoController;
