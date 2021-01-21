let models = require("./ticket-schema");

//Uses the ticket schema to return a list of logged incidents.
async function getTickets(firstName){
    let filter = { };
    if(firstName){
        filter.firstName = firstName;
    }
    return await models.Ticket.find(filter);
}


module.exports.getTickets = getTickets;