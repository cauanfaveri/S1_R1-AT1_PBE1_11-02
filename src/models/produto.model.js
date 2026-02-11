import pool from '../config/db.js';

const produtosModel = {
    selectAll: async () => {
        const sql = 'SELECT * FROM produto;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    insert: async () => {
        insert: async (pProduto) => {
            const sql = "INSERT INTO produtos (nomeProduto, idCategoria, valorProduto) VALUES(?,?,?);";
            const values = [pProduto.nomeProduto, pProduto.idCategoria, pProduto.valorProduto];
            const [rows] = await conn.execute(sql, values);
            return rows;
        }
    }
}

export default produtosModel;