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

app.get('/', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "hello"
                            });

                                con.connect(function(err) {
                                  if (err) throw err;
                                  con.query("SELECT * FROM cv order by ID DESC ", function (err, row, fields) {
                                    if (err) throw err;
                                    console.log(row);	
                                    return res.json(row);
                                    res.send(row);

                                })
                                
    
});
})

app.post('/', (req, res) => {
    
        let content = req.body;

        console.log(content);

        let result = {
            nume: `${content.nume}`,
            prenume: `${content.prenume}`,
		dataNastere: `${content.dataNastere}`,
		diplome: `${content.diplome}`,
		Remarks: `${content.Remarks}`,
		AutoEval: `${content.AutoEval}`
        }

var post  = {nume: `${content.nume}`, prenume: `${content.prenume}`, dataNastere: `${content.dataNastere}`,
diplome: `${content.diplome}`,Remarks: `${content.Remarks}`,AutoEval: `${content.AutoEval}`};
     
        var query = connection.query('INSERT INTO cv SET ?', post, function (error, results, fields) {
            if (error) throw error;
            // Neat!
          });
          console.log(query.sql);
        
        
    
        res.send(result)
    })


app.listen(3000, () => console.log('Example app listening on port 3000!'))