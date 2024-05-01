// server.js
require('dotenv').config();
const fs = require('fs'); // Importa el módulo fs
const https = require('https'); // Importa el módulo https

const app = require('./app');
const { db } = require('./database/config')
const initModel = require('./model/initModel')

const port = process.env.PORT || 4000;

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((err) => console.log('err'));

// initModel();

db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

// const httpsOptions = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// };

// const server = https.createServer(httpsOptions, app);

// server.listen(port, () => console.log(`Running on port:${port}`));
app.listen(port, () => console.log(`Running on port:${port}`))
