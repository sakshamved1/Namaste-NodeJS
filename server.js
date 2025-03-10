
const http  = require("node:http");


const server = http.createServer(function(req, res) {

    if (res.url === "/getSecretData") {
        res.end("There's no secret data")
    }

    //Sending Hello world in reponse
    res.end("Hello world")
})

server.listen(7777);