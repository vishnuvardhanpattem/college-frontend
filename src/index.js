import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//package.json

// {
//   "name": "college",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "nodemon backend/index.js"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "bcryptjs": "^2.4.3",
//     "cookie-parser": "^1.4.6",
//     "cors": "^2.8.5",
//     "dotenv": "^16.4.5",
//     "express": "^4.19.2",
//     "jsonwebtoken": "^9.0.2",
//     "mongodb": "^6.6.2",
//     "mongoose": "^8.4.0",
//     "nodemailer": "^6.9.13",
//     "nodemon": "^3.1.1",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^1.7.2",
//     "bootstrap": "^5.3.3",
//     "react": "^18.3.1",
//     "react-bootstrap": "^2.10.2",
//     "react-dom": "^18.3.1",
//     "react-router-dom": "^6.23.1",
//     "react-scripts": "5.0.1",
//     "web-vitals": "^2.1.4"
//   }
// }