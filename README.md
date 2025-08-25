<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
=======
📄 Invoice Project (React + Static HTML)

This repository contains two implementations of an Invoice Template:

⚛️ React App (dynamic invoice with edit/add row features) – inside src/

📑 Static HTML Invoice (print-ready) – inside Static-Invoice/
>>>>>>> fa687b8d099b97cb732341edce6f9a97c32df617

Currently, two official plugins are available:

<<<<<<< HEAD
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
1. git clone  https://github.com/sohel3441/INVOICE-GENERATOR-MERN-APP.git

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
>>>>>>> fa687b8d099b97cb732341edce6f9a97c32df617
