const express = require('express');
const routers = require('./router');
const { PORT } = require('./constants');
const initDatabase = require('./config/mongooseConfig');

const app = express();

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(routers);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}....`));
    })
    .catch((err) => {
        console.log('Connot connect database:', err);
    })