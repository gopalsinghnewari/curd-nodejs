const mysql = require('mysql2/promise');
const mysqlpool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'world&9996',
    database:'test',

})
module.exports = mysqlpool;


