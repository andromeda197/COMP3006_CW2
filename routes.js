let db = require("./db");
let mongoose = require("mongoose");
let Ticket = require("./ticket-schema").Ticket; 

async function listAllTickets(request, response){
    let tickets = await db.getTickets();
    response.render("stack", {"tickets": tickets});
}

async function pageListAllTickets(request, response){
    let tickets = request.body.firstName;
    tickets = await db.getTickets(tickets);
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
        //console.log(ObjectId.toString(" "));
    });
    response.redirect("stack")
}

async function deleteIncident(request, response){
    let id = request.body.delete
    Ticket.findByIdAndRemove(id).exec();
    response.redirect("Stack");

}

function loadUpdateForm(request, response){
    response.render("update");
}

function loadNewIncident(request, response){
    response.render("incident");
    
}

module.exports.listAllTickets = listAllTickets;
module.exports.loadNewIncident = loadNewIncident;
module.exports.postNewIncident = postNewIncident;
module.exports.pageListAllTickets = pageListAllTickets;
module.exports.deleteIncident = deleteIncident;
module.exports.loadUpdateForm = loadUpdateForm;
