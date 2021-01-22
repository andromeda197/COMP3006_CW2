let models = require("./ticket-schema");

//Uses the ticket schema to return a list of logged incidents.
async function getTickets(incId){
    let filter = { };
    if(incId){
        filter.incId = incId;
    }
    return await models.Ticket.find(filter);
}


module.exports.getTickets = getTickets;