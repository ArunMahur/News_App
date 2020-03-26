const express = require("express");
const server = express();

const body_parser = require("body-parser");
const cors = require('cors');

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(cors({ origin: 'http://localhost:4200' }));

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "LoginAndRegistration&savedNews";
const collectionName = "RegAndLog";
const collectionNameForSaved = "SavedNews";

// << db init >>

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
  // get all items
  dbCollection.find().toArray(function(err, result) {
      if (err) throw err;
        console.log(result);
  });

  server.get("/items/:email/:password", (request, response) => {     //get one throough id in mongo  //pic id from terminal  //i'll show you
    const emailid = request.params.email;
    const passid = request.params.password;

    dbCollection.findOne({ email : emailid , password : passid }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
        console.log('vlaues',JSON.stringify( result));
        });
    });
    server.post("/items", (request, response) => {      //this creates for mongodb
      const item = request.body;

      dbCollection.insertOne(item, (error, result) => { // callback of insertOne
          if (error) throw error;
          // return updated list
          dbCollection.find().toArray((_error, _result) => { // callback of find
              if (_error) throw _error;
              response.json(_result);
              });
            });
        });


}, function(err) { // failureCallback
  throw (err);
});

db.initialize(dbName, collectionNameForSaved, function(dbCollection) { // successCallback
  // get all items
  dbCollection.find().toArray(function(err, result) {
      if (err) throw err;
        console.log(result);
  });

  server.get("/item/:emailid", (request, response) => {   //get all urls...
    // return updated list
    const email = request.params.emailid;

    dbCollection.find({ emailid: email }).toArray((error, result) => {
        if (error) throw error;
        response.json(result);
        });
    });

    server.post("/urls", (request, response) => {   //post the url saved
      const item = request.body;
      dbCollection.insertOne( item, (error, result) => { // callback of insertOne
        if (error) throw error;
        // return updated list
        dbCollection.find().toArray((_error, _result) => { // callback of find
            if (_error) throw _error;
            response.json(_result);
            });
          });
      });

}, function(err) { // failureCallback
  throw (err);
});

