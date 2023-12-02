const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

http.createServer(function (req, res) {
    console.log("Aplikasi berjalan pada port: " + port);
    console.log("Request for image received.");

    if (req.url === "/") {
        // Serve the HTML file
        fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/styles.css") {
        // Serve the CSS file
        fs.readFile(path.join(__dirname, "styles.css"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    } else if (req.url === "/image.jpg") {
        // Serve the image file
        fs.readFile(path.join(__dirname, "/image.jpg"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "image/jpg" });  // Ganti sesuai tipe gambar
            res.end(data);
        });
    } else {
        // Handle other requests (if any)
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
}).listen(port);
