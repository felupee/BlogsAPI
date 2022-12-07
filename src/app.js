const express = require('express');
const routerLogin = require('./routes/login.router');
const routerUser = require('./routes/user.router');
const errorMiddleware = require('./middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use(routerLogin);

app.use(routerUser);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
