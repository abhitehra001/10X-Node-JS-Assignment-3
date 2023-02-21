
const fs = require("fs");
const http = require("http");

const PORT = 5000;

fs.writeFile("index.html",
"<h1>Hello World</h1><p>This is Abhijeet Tehra...</p>",
(err) => {
    if(err){
    console.log("Error:",err);
    }
})

http.createServer(function (req, res) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(PORT);