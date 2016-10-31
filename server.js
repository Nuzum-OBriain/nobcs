var express = require("express");
var app = express();

app.use(express.static(__dirname));
app.get("/",function(req,res) {
    console.log(res);
});

var server = app.listen(8081,function() {
    console.log("Nuzum O'Briain Commenting in Progress");
});
var io = require("socket.io").listen(server);
var fs = require("fs");
io.sockets.on("connection",function(client) {
    client.on("saveComments",function(data) {
        fs.writeFile("E:/Mini_Company/feedback.html",data.page,"utf8",function(error) {
            io.sockets.emit("done");
            if(error) {
                console.log(error);
            }
        })
    });
});
