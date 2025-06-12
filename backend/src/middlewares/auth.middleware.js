// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  });
}

function isAdmin(req, res, next) {
  if (req.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Acesso negado' });
  }
  next();
}

module.exports = { verifyToken, isAdmin };
