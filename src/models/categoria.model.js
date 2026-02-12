import pool from '../config/db.js';

const categoriaModel = {

    selectAll: async () => {
        const sql = 'SELECT * FROM categorias';
        const [rows] = await pool.execute(sql);
        return rows;
    },

    insert: async (categoria) => {
        const sql = 'INSERT INTO categorias (descricaoCategoria, dataCad) VALUES (?, NOW())';
        const [result] = await pool.execute(sql, [categoria.descricaoCategoria]);
        return result;
    },

    update: async (id, categoria) => {
        const sql = 'UPDATE categorias SET descricaoCategoria=? WHERE idCategoria=?';
        const [result] = await pool.execute(sql, [categoria.descricaoCategoria, id]);
        return result;
    },

    delete: async (id) => {
        const sql = 'DELETE FROM categorias WHERE idCategoria=?';
        const [result] = await pool.execute(sql, [id]);
        return result;
    }
};

export default categoriaModel;
