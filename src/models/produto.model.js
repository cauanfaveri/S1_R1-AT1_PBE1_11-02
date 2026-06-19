import { connection } from '../config/db.js';
const produtosModel = {

    selectAll: async () => {
        const sql = 'SELECT * FROM produtos;';
        const [rows] = await connection.execute(sql);
        return rows;
    },
    selectById: async (id) => {
        const sql = 'SELECT * FROM produtos WHERE idProduto = ?;';
        const [rows] = await connection.execute(sql, [id]);
        return rows[0];
    },
    insert: async (produto) => {
        const sql = 'INSERT INTO produtos (nomeProduto, idCategoria, valorProduto, vinculoImagem, dataCad) VALUES (?, ?, ?, ?, NOW())';
        const values = [ produto.nomeProduto, produto.idCategoria, produto.valorProduto, produto.vinculoImagem ];

        const [result] = await connection.execute(sql, values);
        return result;
    },
    update: async (id, produto) => {
        const sql = 'UPDATE produtos SET nomeProduto=?, idCategoria=?, valorProduto=?, vinculoImagem=? WHERE idProduto=?';
        const values = [ produto.nomeProduto, produto.idCategoria, produto.valorProduto, produto.vinculoImagem, id ];

        const [result] = await connection.execute(sql, values);
        return result;
    },
    delete: async (id) => {
        const sql = 'DELETE FROM produtos WHERE idProduto=?';
        const [result] = await connection.execute(sql, [id]);
        return result;
    }
};

export default produtosModel;