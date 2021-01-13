let models = require("./ticket-schema");

//Uses the ticket schema to return a list of logged incidents.
async function getTickets(){
    let filter = { };
    return await models.Ticket.find();
}


module.exports.getTickets = getTickets;