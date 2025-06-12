// routes/client.routes.js
const express = require('express');
const router = express.Router();
const { createClient, getClients } = require('../controllers/client.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.get('/', verifyToken, getClients);
router.post('/', verifyToken, createClient);

module.exports = router;
