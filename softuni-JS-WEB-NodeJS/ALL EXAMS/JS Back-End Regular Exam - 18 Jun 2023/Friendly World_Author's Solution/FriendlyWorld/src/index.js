const express = require('express');

const app = express();

const { PORT } = require('./constants');
const routers = require('./router');

const initDatabase = require('./config/mongooseConfig');

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(routers);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.log('Cannot connect database:', err);
    })