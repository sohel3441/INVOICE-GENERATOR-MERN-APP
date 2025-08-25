📄 Invoice Project (React + Static HTML)

This repository contains two implementations of an Invoice Template:

⚛️ React App (dynamic invoice with edit/add row features) – inside src/

📑 Static HTML Invoice (print-ready) – inside Static-Invoice/

✨ Features

React Version

Editable invoice items

Add / Update rows

Save to local storage

Print option

Static Version

Pure HTML + CSS invoice

Optimized for A4 printing

Clean, professional design

Print button included

📂 Project Structure
REACT-TEST/
├── node_modules/
├── public/
├── src/                # React code (dynamic invoice)
├── Static-Invoice/     # Static HTML + CSS invoice
│   ├── invoice.html
│   ├── invoice.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md

🚀 Running the React App
1. git clone 

2. Install dependencies
npm install

3. Start development server
npm run dev


This will start the React app (usually at http://localhost:5173/
).

📑 Using the Static Invoice

Navigate to the Static-Invoice/ folder:

cd Static-Invoice


Open invoice.html in your browser (Chrome / Edge / Firefox).

👉 You can print it directly or Save as PDF.
👉 All styles are inside invoice.css.

🖨️ Printing Notes

Default size: A4

Action buttons (Save/Print) will not appear in printout

Background colors and borders are preserved

🛠️ Customization

React App → update components inside src/

Static Invoice → edit invoice.html & invoice.css
