const express = require('express');
const router = express.Router();
const bookController = require("../controller/buku.js");

// Menggunakan metode GET untuk mendapatkan semua buku
router.get("/", bookController.getAllBook);
router.post("/", bookController.createNewBook);
router.put("/:idBuku", bookController.updateBook);
router.delete("/:idBuku", bookController.deleteBook);

module.exports = router;
