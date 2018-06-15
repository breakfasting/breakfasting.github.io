/* eslint-disable */

var express = require('express');
var app = express();
var mysql      = require('mysql');
var cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/new', function (req, res) {

    res.send('post success');
    console.log(req.body);
    let nextID = 0;

    connection.query('SELECT * FROM `blog`', function(err, rows, fields) {
        if (err) throw err;
        nextID = rows.length;
        console.log(nextID);
        const queryText = 'INSERT INTO `webprog2018`.`blog` (`postId`, `title`, `descr`, `cat`, `thumb`, `time`, `article`) VALUES ("' + 
        nextID + 
        '", "' + 
        req.body.title + 
        '", "' + 
        req.body.descr + 
        '", "' + 
        req.body.cat + 
        '", "images/project-ph.jpg", NOW(), "' + 
        req.body.article + 
        '")';
        console.log(queryText);
        connection.query(queryText, function(err, rows, fields) {
            if (err) throw err;
            console.log('sent');
        });
    });

   // const queryText = 'INSERT INTO `webprog2018`.`blog` (`postId`, `title`, `descr`, `cat`, `thumb`, `time`, `article`) VALUES (' + nextID + ', ' + req.body.title + ', ' + req.body.descr + ', ' + req.body.cat + ', images/project-ph.jpg, NOW(), ' + req.body.article +')';
    
    connection.query(queryText, function(err, rows, fields) {
        if (err) throw err;
        console.log('sent');
    });
});

app.listen(8080, function () {
    console.log('listening on *:8080');
});

