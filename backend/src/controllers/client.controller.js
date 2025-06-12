// controllers/client.controller.js
const prisma = require('../services/prisma');

async function createClient(req, res) {
  const { name, slug } = req.body;

  try {
    const client = await prisma.client.create({
      data: {
        name,
        slug,
        createdBy: req.userId,
      },
    });

    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar cliente', error: err.message });
  }
}

async function getClients(req, res) {
  try {
    const clients = await prisma.client.findMany();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar clientes' });
  }
}

module.exports = { createClient, getClients };
