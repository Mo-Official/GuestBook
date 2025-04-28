# GuestBook

## Beschreibung

Dies ist eine minimale Node.js-Anwendung für ein einfaches Gästebuch.  
Einträge werden im Arbeitsspeicher (RAM) gespeichert und gehen beim Neustart des Servers verloren.

**Dieses Projekt wurde im Rahmen der Vorlesung "Web Engineering" an der DHBW erstellt.**

## Projektstruktur

Das Projekt ist in zwei Teile aufgeteilt:

- **Backend**: Node.js/Express API (Port 3000)
- **Frontend**: Statische HTML/CSS/JS Seite (Port 80)

## Installation & Start

### Mit Docker (empfohlen)

1. Docker und Docker Compose installieren
2. Im Projektverzeichnis ausführen:
   ```bash
   docker-compose up --build
   ```
3. Anwendung im Browser öffnen:  
   [http://localhost](http://localhost)

### Manuell

#### Backend

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

#### Frontend

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

## Hinweise

- Die Einträge werden nur im RAM gespeichert und sind nach einem Neustart verloren.
- Das Frontend kommuniziert mit dem Backend über die API unter `http://localhost:3000/entries`.
- Für das Styling wird reines CSS verwendet.

## Features

- Einträge hinzufügen (Name und Nachricht)
- Alle Einträge anzeigen (inkl. Datum)
- Einfaches, modernes Frontend mit EJS und CSS
