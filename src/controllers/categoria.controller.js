import pool from "../config/db.js"
import categoriaModel from "../models/categoria.model.js";


const categoriaController = {

    criarCategoria: async (req, res) => {
        try {

            const { descricaoCategoria } = req.body;

            const sql = 'INSERT INTO categorias (descricaoCategoria, dataCad) VALUES (?, NOW())';

            const [result] = await pool.execute(sql, [descricaoCategoria]);

            res.status(201).json(result);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    listarCategorias: async (req, res) => {
        try {

            const sql = 'SELECT * FROM categorias';
            const [rows] = await pool.execute(sql);

            res.json(rows);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    atualizarCategoria: async (req, res) => {
        try {

            const id = req.params.id;
            const { descricaoCategoria } = req.body;

            const sql = 'UPDATE categorias SET descricaoCategoria=? WHERE idCategoria=?';

            const [result] = await pool.execute(sql, [descricaoCategoria, id]);

            res.json(result);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deletarCategoria: async (req, res) => {
        try {

            const id = req.params.id;

            const sql = 'DELETE FROM categorias WHERE idCategoria=?';
            const [result] = await pool.execute(sql, [id]);

            res.json(result);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default categoriaController;
