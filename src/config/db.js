import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'produtos11',
    port: 3306,
    waitForConnections: true, // Aguarda conexões livre
    connectionLimit: 10, // Limita o número de conexões
    queueLimit: 0 // Sem limite para a fila de conexão
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com o MySQL bem sucedida');
    connection.release();
  } catch (error) {
    console.error(`Erro ao conectar com o banco de dados: ${error}`);
  }
})();

export default pool;