const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let entries = [
    
    {
        name: "Mouaz Tabboush",
        message: "...waren sie schonmal im Baden-Württemberg?",
        date: "2025-01-01"
    },
    {
        name: "Mouaz Tabboush",
        message: "aber...",
        date: "2025-01-01"
    },
    {
        name: "Mouaz Tabboush",
        message: "Nett hier.",
        date: "2025-01-01"
    }    
];

// GET: Alle Einträge abrufen (API)
app.get('/entries', (req, res) => {
  res.json(entries);
});

// POST: Neuen Eintrag hinzufügen (API)
app.post('/entries', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name und Nachricht erforderlich.' });
  }
  const entry = { name, message, date: new Date().toISOString() };
  entries.push(entry);
  res.status(201).json(entry);
});

// Frontend über EJS
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
}); 