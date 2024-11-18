const sql = require('mysql2');

const pool = sql.createPool({
    host : 'locahost',
    user :'root',
    database : 'node-course',
    password :'root'    

});