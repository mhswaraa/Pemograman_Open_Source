const express = require("express");
const app = express();
const port = 8080;

// Konfigurasi EJS sebagai mesin templat
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json());
const homeRoute = require("./routes/home");
const bukuRoute = require("./routes/buku");
const userRoute = require("./routes/user");
const assetsRoute = require("./routes/assets"); 
const pageRoute = require("./routes/page"); 
const partialRoute = require("./routes/partial"); 

// Middleware untuk menangani kesalahan
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/buku", bukuRoute);
app.use("/assets", assetsRoute);
app.use("/page", pageRoute);
app.use("/partial", partialRoute);

app.listen(port, () => {
    console.log("Server Berjalan di Port " + port);
});
