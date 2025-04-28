# GuestBook

## Beschreibung

Dies ist eine minimale Node.js-Anwendung für ein einfaches Gästebuch.  
Einträge werden im Arbeitsspeicher (RAM) gespeichert und gehen beim Neustart des Servers verloren.


## Projektstruktur

Das Projekt ist in zwei Teile aufgeteilt:

- **Backend**: Node.js/Express API (Port 3000)
- **Frontend**: Statische HTML/CSS/JS Seite (Port 80)

## Installation & Start

### Backend

1. In den Backend-Ordner wechseln:
   ```bash
   cd backend
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Entwicklung mit Hot-Reload starten:
   ```bash
   npm run dev
   ```

### Frontend

1. In den Frontend-Ordner wechseln:
   ```bash
   cd frontend
   ```

2. Mit einem lokalen Server starten (z.B. VSCode Live Server oder):
   ```bash
   npx serve .
   ```

3. Anwendung im Browser öffnen:  
   [http://localhost:3000](http://localhost:3000)
