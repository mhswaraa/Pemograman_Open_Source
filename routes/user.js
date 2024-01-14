const express = require('express');
const router = express.Router();
const userController = require ("../controller/user.js")
const UserModel = require('../models/users.js');

router.get("/", userController.getAllUserHtml);
router.post("/", userController.createNewUser);
router.put("/:idUser", userController.updateUser);
router.delete("/:idUser", userController.deleteUser);

// Pencarian fitur
router.get("/search", userController.searchUser);


module.exports = router;