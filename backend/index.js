const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let entries = [
    {
        name: "Mouaz Tabboush",
        message: "waren sie schonmal im Baden-Württemberg?",
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

app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
}); 