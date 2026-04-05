const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../database.db'));

// Création des tables au démarrage
db.exec(`
  CREATE TABLE IF NOT EXISTS produits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    description TEXT,
    prix INTEGER NOT NULL,
    categorie TEXT,
    emoji TEXT DEFAULT '📦',
    badge TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    description TEXT,
    emoji TEXT DEFAULT '⚙️'
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    telephone TEXT NOT NULL,
    sujet TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed produits si vide
const count = db.prepare('SELECT COUNT(*) as n FROM produits').get();
if (count.n === 0) {
  const insert = db.prepare(`
    INSERT INTO produits (nom, description, prix, categorie, emoji, badge)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  insert.run('Laptop Gaming 15"', 'Core i7, 16GB RAM, RTX 3060, 512GB SSD', 450000, 'laptop', '💻', 'NOUVEAU');
  insert.run('PC Bureau Complet', 'Core i5, 8GB RAM, 256GB SSD + Écran 22"', 280000, 'desktop', '🖥️', null);
  insert.run('Smartphone Android', '6.7", 128GB, 5000mAh, Triple caméra', 120000, 'telephone', '📱', 'PROMO');
  insert.run('Manette Xbox Series', 'Compatible PC & Console, wireless', 35000, 'accessoire', '🎮', null);
}

// Seed services si vide
const countS = db.prepare('SELECT COUNT(*) as n FROM services').get();
if (countS.n === 0) {
  const ins = db.prepare('INSERT INTO services (titre, description, emoji) VALUES (?, ?, ?)');
  ins.run('Vente Laptop & Desktop', 'Large choix d\'ordinateurs portables et de bureau de toutes marques.', '🖥️');
  ins.run('Vente de Téléphones', 'Smartphones Android et accessoires de qualité.', '📱');
  ins.run('Maintenance & Réparation', 'Diagnostic, réparation logicielle et matérielle.', '🔧');
  ins.run('Téléchargement Jeux & Films', 'Jeux, films, séries et logiciels à la demande.', '🎮');
  ins.run('Accessoires Informatiques', 'Souris, claviers, casques, câbles et tout le matériel.', '📦');
  ins.run('Conseil & Étude', 'Conseil personnalisé pour l\'achat et la configuration.', '💡');
}

module.exports = db;