const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'seguro'
});

connection.connect((connect) => {
    if (error) {
        console.log('Erro ao conecatar ao banco de dados', error);
    } else {
        console.log('Conexão com o banco de dados estabelacida');
    }
});