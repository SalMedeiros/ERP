// controllers/user.controller.js
const prisma = require('../services/prisma');
const bcrypt = require('bcryptjs');

async function createUser(req, res) {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar usuário', error: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany({ select: { id: true, email: true, role: true, active: true } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
}

module.exports = { createUser, getUsers };
