var http = require("http");

var fs = require("fs");


var server = http.createServer(function(request, response){
    console.log("Request was made: " + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Naruto',
        job: 'Ninja',
        age: '21'
    };
    response.end(JSON.stringify(myObj));

/*     var myReadmStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadmStream.pipe(response); */
});

server.listen(3000, '127.0.0.1');
console.log("Listening to port 3000");
