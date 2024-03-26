
const mysql = require('mysql2/promise');



const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1578',
    database: 'clientes'
    
})



module.exports = connection