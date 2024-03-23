const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gg-events'
});

con.connect((err) => {
    if (err) {
        console.log('Error!');
    }
    else {
        console.log('DB Connected');
    }
});

module.exports = con;