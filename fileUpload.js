const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'hello'
});

connection.connect();
const app = express()
app.use(bodyParser.json());
app.use(cors())
  

    app.post('/uploadFile', (req, res) => {
      const express = require('express')
      const bodyParser = require('body-parser')
      const cors = require('cors')
      const mysql      = require('mysql');

      var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "root",
          database: "hello"})
            let content = req.body;
            console.log(content);
            let result = {
              numefisier: `${content.filename}`,
              tipfisier: `${content.filetype}`,
              continutfisier: `${content.value}`
          }
          var post  = {numefisier: `${content.filename}`, tipfisier: `${content.filetype}`, continutfisier: `${content.value}`}  
          var query = connection.query('INSERT INTO fisiere SET ?', result, function (error, results, fields) {
            if (error) throw error;
            // Neat!
          });
          console.log(query.sql);
        res.send(result)
          }),
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))