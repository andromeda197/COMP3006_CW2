$(function() {
    let socket = io("http://localhost:9000");
    socket.on("confirm connection", function(msg) { $("#messages").append("<li>" + msg + "</li>");
    });
    socket.on("response", function(msg) { $("#messages").append("<li>" + msg + "</li>");
    });
    socket.emit("request", "Hello from the client"); });