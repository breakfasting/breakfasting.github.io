/* eslint-disable */

var express = require('express');
var app = express();
var mysql      = require('mysql');
var cors = require('cors');

app.use(cors());

var connection = mysql.createConnection({
  host     : '140.122.143.108',
  user     : 'breakfast',
  password : '120841530',
  database : 'webprog2018',
});

// connection.connect();

// connection.query('SELECT * FROM `blog`', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows);
// });

// connection.end();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/posts', function (req, res) {
    // connection.connect();
    connection.query('SELECT * FROM `blog`', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
    // connection.end();
});

app.listen(8080, function () {
    console.log('listening on *:8080');
});

