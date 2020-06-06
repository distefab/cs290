var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_distefab',
  password        : '0608',
  database        : 'cs290_distefab'
});

module.exports.pool = pool;