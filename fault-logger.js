let express = require ("express");
let mongoose = require ("mongoose");
let http = require("http");
let path = require("path");
let Io = require("socket.io");
let routes = require("./routes");
let port = process.env.PORT || 9000
let bodyParser = require("body-parser");


//Define db info - such as connection port. 
let url = "mongodb://localhost:27017/ticketdbs";
mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true});

//Initialise the app.
let app = express();
let server = http.createServer(app);

//Setup ejs template 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Setup static files
app.use(express.static(path.join(__dirname, "files")));

//Configuring websocket
let io = Io(server);

//Enable processing of post forms
mongoose.set("useFindAndModify", false);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.get("/incident", routes.loadNewIncident);
app.get("/stack", routes.listAllTickets);
app.get("/update", routes.loadUpdateForm);
app.post("/submitTicket", routes.postNewIncident);
app.post("/filterTicket",routes.pageListAllTickets);
app.post("/deleteIncident", routes.deleteIncident);

io.on("connection", function(socket){
    socket.emit("confirm connection", "Connected...");

    socket.on("request", function(msg){
        console.log("recieved message: '" + msg + "'");
        socket.emit("response", "Hello from the server")
    })
});

//Start the app
server.listen(9000, function(){
    console.log("listening on " + port);
});
