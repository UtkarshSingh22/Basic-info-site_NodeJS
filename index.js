let http = require("http");
let fs = require("fs");
let path = require("path");

let PORT = process.env.PORT || 8080;

let server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/about") {
        fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/contact") {
        fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
});

server.listen(PORT, () => {
    console.log("server started!");
});
