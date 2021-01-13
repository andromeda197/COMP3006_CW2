let fs = require ("fs");
let mongoose = require ("mongoose");
let Ticket = require("./ticket-schema").Ticket;

let data = fs.readFileSync("tickets.json");
let ticket = JSON.parse(data);

let url = "mongodb://localhost:27017/ticketdbs";
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

//Method to insert JSON data contiguously (love you Nigel ;) )
Ticket.collection.insertMany(ticket["tickets"], function(err, result){
    //error handling...
    if (err) console.log(err);

    //adds documents to the db and closes the connection.
    console.log(result.insertedCount + "docs inserted")
    mongoose.connection.close();
    console.log("DB connection closed");
});