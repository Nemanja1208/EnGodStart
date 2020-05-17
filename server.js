const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
app.use(cors({origin: 'http://localhost:9000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// TEST VERSION FOR TEST.JSX COMPONENT
const olddataPath = 'oldposts.json';

 app.get('/api/customers', (req, res) => {
     fs.readFile(olddataPath, 'utf8', (err, data) => {
         if(err){
             throw err;
         }
          res.send(JSON.parse(data));
     })
 });

app.post('/api/customers', (req, res) => {
     fs.readFile(olddataPath, 'utf8', (err,data) =>{
          if(err){
              throw err;
         }
         let newUser = {
             name: req.body.name,
             password: req.body.password,
             profession: req.body.profession,
             id: data.length
         }
            var content = JSON.parse(data);
            console.log(content);
            content.push(newUser);
            console.log(content);
            json = JSON.stringify(content, null, 2);
            console.log(json);
          fs.writeFile(olddataPath, json, 'utf8', (err) =>{
             if(err){
                 throw err;
              } console.log("This is after the post");
          })
     })
  })

  // VERSION FOR HOPE-APP with the changed JSON
  const dataPath = 'posts.json';
  //GET THE RANKINGS

 app.get('/api/rankings', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err){
            throw err;
        }
         res.send(JSON.parse(data));
    })
});

    // Post a vote
    app.post('/api/rankings', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err,data) =>{
             if(err){
                 throw err;
            }
               let orgnindex = req.body.id - 1;
               var content = JSON.parse(data);
               content[orgnindex].votes += 1;
               console.log(content);
               json = JSON.stringify(content, null, 2);
               console.log(json);
             fs.writeFile(dataPath, json, 'utf8', (err) =>{
                if(err){
                    throw err;
                 } console.log("This is after the post");
             })
        })
     })

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));