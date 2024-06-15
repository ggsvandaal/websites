var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(4000);

async function getUsers() {
    const reqUrl = "C:\Users\svand\OneDrive\Desktop\CS290_HW8\userData.json";
    const request = new Request(reqUrl);

    const response = await fetch(request);
    const users = await response.json();
    console.log(users);
}

getUsers();


