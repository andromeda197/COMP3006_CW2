let db = require("./db");
let mongoose = require("mongoose");
let Ticket = require("./ticket-schema").Ticket; 
let ID = require("./id-generator");

async function listAllTickets(request, response){
    let tickets = await db.getTickets();
    response.render("stack", {"tickets": tickets});
}
async function postNewIncident(request, response){
    let data = {
        incId: request.body.incId,
        firstName: request.body.fname,
        lastName: request.body.surname,
        location: request.body.location,
        compID: request.body.compid,
        description: request.body.description

    };
    Ticket.collection.insertOne(data, function(err){
        //error handling...
        if (err) console.log(err);
        //adds documents to the db and closes the connection.
        console.log("Data recieved");
    });
    response.redirect("incident")
}

async function deleteIncident(request, repsonse){
    Ticket.collection.deleteOne(data, function(err){
        //error handling...
        if (err) console.log(err);
        //adds documents to the db and closes the connection.
        console.log("Data recieved");
    });
    response.redirect("incident")
}

function loadNewIncident(request, response){
    let id = ID.userIdGen();
    response.render("incident", {id: id});
}

function loadResolved(request, response){
    response.render("resolved");
}

module.exports.listAllTickets = listAllTickets;
module.exports.loadNewIncident = loadNewIncident;
module.exports.loadResolved = loadResolved;
module.exports.postNewIncident = postNewIncident;
module.exports.deleteIncident = deleteIncident;
