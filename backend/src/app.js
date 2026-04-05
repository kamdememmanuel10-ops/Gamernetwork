const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

app.use('/api/produits', require('./routes/produits.routes'));

app.get('/', (req, res) => res.json({ message: '🎮 GAMER NETWORK CMR' }));

app.use(require('./middlewares/errorHandler'));

module.exports = app;