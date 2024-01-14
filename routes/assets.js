// routes/assets.js
const express = require("express");
const path = require("path");
const router = express.Router();

// Gunakan middleware untuk menangani file statis dari folder 'assets'
router.use(express.static(path.join(__dirname, '../assets')));

module.exports = router;

