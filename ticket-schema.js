let mongoose = require("mongoose");

//Create schema for ticket data.
let ticketSchema = new mongoose.Schema({
    incId: String,
    firstName: String,
    lastName: String,
    location: String,
    compID: String,
    description: String
    
});
let Ticket = mongoose.model("tickets", ticketSchema);
module.exports.Ticket = Ticket;