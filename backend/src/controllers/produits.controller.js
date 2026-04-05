const db = require('../config/db');

exports.getAll = (req, res) => {
  const produits = db.prepare('SELECT * FROM produits ORDER BY created_at DESC').all();
  res.json({ success: true, data: produits });
};

exports.getOne = (req, res) => {
  const produit = db.prepare('SELECT * FROM produits WHERE id = ?').get(req.params.id);
  if (!produit) return res.status(404).json({ success: false, message: 'Produit introuvable' });
  res.json({ success: true, data: produit });
};

exports.create = (req, res) => {
  const { nom, description, prix, categorie, emoji, badge } = req.body;
  if (!nom || !prix) return res.status(400).json({ success: false, message: 'Nom et prix requis' });
  const result = db.prepare(
    'INSERT INTO produits (nom, description, prix, categorie, emoji, badge) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(nom, description, prix, categorie, emoji || '📦', badge || null);
  res.status(201).json({ success: true, data: { id: result.lastInsertRowid, ...req.body } });
};

exports.update = (req, res) => {
  const { nom, description, prix, categorie, emoji, badge } = req.body;
  db.prepare(
    'UPDATE produits SET nom=?, description=?, prix=?, categorie=?, emoji=?, badge=? WHERE id=?'
  ).run(nom, description, prix, categorie, emoji, badge, req.params.id);
  res.json({ success: true, message: 'Produit mis à jour' });
};

exports.delete = (req, res) => {
  db.prepare('DELETE FROM produits WHERE id = ?').run(req.params.id);
  res.json({ success: true, message: 'Produit supprimé' });
};

exports.getAll = (req, res) => {
  const services = db.prepare('SELECT * FROM services').all();
  res.json({ success: true, data: services });
};

exports.send = (req, res) => {
  const { nom, telephone, sujet, message } = req.body;
  if (!nom || !telephone) return res.status(400).json({ success: false, message: 'Nom et téléphone requis' });
  db.prepare(
    'INSERT INTO messages (nom, telephone, sujet, message) VALUES (?, ?, ?, ?)'
  ).run(nom, telephone, sujet, message);
  res.status(201).json({ success: true, message: 'Message reçu avec succès !' });
};

exports.getAll = (req, res) => {
  const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
  res.json({ success: true, data: messages });
};
