// ✅ depois - usando o categoriaModel corretamente (igual ao produto.controller.js)
import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    criarCategoria: async (req, res) => {
        try {
            const { descricaoCategoria } = req.body;
            const result = await categoriaModel.insert({ descricaoCategoria }); // ✅
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    listarCategorias: async (req, res) => {
        try {
            const rows = await categoriaModel.selectAll(); // ✅
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    atualizarCategoria: async (req, res) => {
        try {
            const id = req.params.id;
            const { descricaoCategoria } = req.body;
            const result = await categoriaModel.update(id, { descricaoCategoria }); // ✅
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deletarCategoria: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await categoriaModel.delete(id); // ✅
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default categoriaController;