let express = require("express");
let app = express();

let server = require("http").createServer(app);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/client/index.html");
});
app.use('/client',express.static(__dirname + '/client'));


console.log("Server started.");