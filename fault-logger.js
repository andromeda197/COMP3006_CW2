let express = require ("express");
let mongoose = require ("mongoose");
let path = require("path");
let routes = require("./routes");
let bodyParser = require("body-parser");


//Define db info - such as connection port. 
let url = "mongodb://localhost:27017/ticketdbs";
mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true});
let port = 9000;

//Initialise the app.
app = express();

//Setup ejs template 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Setup static files
app.use(express.static(path.join(__dirname, "files")));

//Enable processing of post forms
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get("/incident", routes.loadNewIncident);
app.get("/stack", routes.listAllTickets);
app.get("/resolved", routes.loadResolved);
app.post("/submitTicket", routes.postNewIncident);
app.post("/filterName",routes.pageListAllTickets);
app.post("/deleteIncident", routes.deleteIncident);

//Start the app
app.listen(port, function(){
    console.log("listening on " + port);
});
