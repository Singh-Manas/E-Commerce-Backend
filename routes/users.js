var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'devs',
    password: '12345',
    port: 5432
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query("SELECT * FROM COMPANY", (err, result) => {
    if(err) {
        throw err;
    }
    res.status(200).json(result);
  });
  // res.send('respond with a resource');
});

module.exports = router;
