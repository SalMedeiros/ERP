// routes/user.routes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/user.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

router.get('/', verifyToken, isAdmin, getUsers);
router.post('/', verifyToken, isAdmin, createUser);

module.exports = router;
