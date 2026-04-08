# 🎮 GAMER NETWORK — Site Web Officiel

> **Boutique Tech & Gaming · Yaoundé, Cameroun**  
> Avenue Kennedy · Centre Commercial Mfoundi Mall · Boutique R53

---

## 📸 Aperçu

Site web professionnel complet pour **Gamer Network**, boutique spécialisée en vente de matériel informatique, smartphones, accessoires gaming, jeux et services de maintenance à Yaoundé, Cameroun.

---

## 🚀 Fonctionnalités

- ✅ Design **ultra-premium dark** — noir, or, glassmorphism
- ✅ **Carousel automatique** de produits et équipements
- ✅ **Catalogue produits dynamique** connecté à une base SQLite
- ✅ **Filtre par catégorie** (Laptops, Téléphones, Gaming, Accessoires...)
- ✅ **Formulaire de contact** → envoi direct sur WhatsApp
- ✅ Bouton **WhatsApp flottant** avec message pré-rempli
- ✅ Ticker défilant automatique
- ✅ Animations au scroll, compteurs animés, preloader
- ✅ **100% Responsive** — mobile, tablette, desktop
- ✅ Cursor personnalisé (desktop)
- ✅ Navigation active au scroll

---

## 🛠️ Stack Technique

| Partie | Technologie |
|---|---|
| Frontend | HTML5 / CSS3 / JavaScript Vanilla |
| Backend | Node.js + Express.js |
| Base de données | SQLite (`better-sqlite3`) |
| Déploiement Frontend | Netlify |
| Déploiement Backend | Render |

---

## 📁 Structure du Projet

```
gamer-network/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                  # Connexion SQLite + seed
│   │   ├── controllers/
│   │   │   ├── produits.controller.js
│   │   │   ├── services.controller.js
│   │   │   ├── contact.controller.js
│   │   │   └── extra.controller.js    # Témoignages + Stats
│   │   ├── routes/
│   │   │   ├── produits.routes.js
│   │   │   ├── services.routes.js
│   │   │   ├── contact.routes.js
│   │   │   └── extra.routes.js
│   │   ├── middlewares/
│   │   │   ├── errorHandler.js
│   │   │   └── logger.js
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── database.db                    # Généré automatiquement
│
└── frontend/
    ├── index.html                     # Site complet en 1 fichier
    └── images/                        # Photos des produits
        ├── hero-bg.jpg
        ├── boutique.jpg
        ├── iphone14-profil.jpg
        └── ...
```

---

## ⚡ Installation & Lancement

### Prérequis

- Node.js v18+
- npm

### 1. Cloner le projet

```bash
git clone https://github.com/kamdememmanuel10-ops/gamer-network.git
cd gamer-network
```

### 2. Installer les dépendances backend

```bash
cd backend
npm install
```

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Ouvre `.env` et remplis :

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
EMAIL_USER=alainsimo88@yahoo.fr
EMAIL_PASS=ton_mot_de_passe
WHATSAPP_NUMBER=237656023262
```

### 4. Lancer le backend

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5000`

### 5. Ouvrir le frontend

Ouvre `frontend/index.html` avec **Live Server** dans VS Code ou double-clique dessus.

---

## 🗄️ API Endpoints

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/produits` | Liste tous les produits |
| GET | `/api/produits/categories` | Liste des catégories |
| GET | `/api/produits/:id` | Un produit |
| POST | `/api/produits` | Créer un produit |
| PUT | `/api/produits/:id` | Modifier un produit |
| DELETE | `/api/produits/:id` | Supprimer un produit |
| GET | `/api/services` | Liste des services |
| POST | `/api/contact` | Envoyer un message |
| GET | `/api/contact` | Voir les messages |
| GET | `/api/temoignages` | Liste des témoignages |
| GET | `/api/stats` | Statistiques boutique |

---

## 🖼️ Ajouter des photos aux produits

### 1. Ajouter la colonne image (1 seule fois)

```bash
node -e "const db = require('./src/config/db'); try { db.exec('ALTER TABLE produits ADD COLUMN image TEXT'); } catch(e) {} console.log('OK');"
```

### 2. Associer une photo à un produit

```bash
node -e "
const db = require('./src/config/db');
db.prepare('UPDATE produits SET image=? WHERE nom=?')
  .run('images/iphone14.jpg', 'iPhone 14 Pro');
console.log('Photo ajoutée !');
"
```

### 3. Place la photo dans `frontend/images/`

```
frontend/images/iphone14.jpg  ✅
```

---

## 🌍 Déploiement

### Backend → Render.com

1. Push sur GitHub
2. Render → New Web Service → connecte le repo
3. Configure :
   - **Root Dir** : `backend`
   - **Build** : `npm install`
   - **Start** : `node server.js`
4. Ajoute les variables d'environnement dans Render

### Frontend → Netlify

1. Netlify → Add new site → Import from Git
2. Configure :
   - **Base directory** : `frontend`
   - **Publish dir** : `frontend`
3. Deploy !

---

## 📞 Contact Boutique

| | |
|---|---|
| 📍 Adresse | Avenue Kennedy, face ancien maison Orange, Mfoundi Mall Btq R53, Yaoundé |
| 📞 Téléphone | +237 640 10 74 87 |
| 💬 WhatsApp | +237 640 10 74 87 |
| ✉️ Email | gracekamgne22@gmail.com |
| 📘 Facebook | camernet work |

---

## 👨‍💻 Développeur

Développé par **Emmanuel Kamdem Franck.** — Étudiant en Informatique, Yaoundé, Cameroun.

---

## 📄 Licence

Ce projet est propriétaire. Tous droits réservés © 2025 **Gamer Network**.
