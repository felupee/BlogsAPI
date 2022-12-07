const express = require('express');
const routerLogin = require('./routes/login.router');
const routerUser = require('./routes/user.router');
const routerCategory = require('./routes/category.router');
const errorMiddleware = require('./middlewares/errorMiddleware');
const postRouter = require('./routes/post.router');

// ...

const app = express();

app.use(express.json());

app.use(routerLogin);

app.use(routerUser);

app.use(routerCategory);

app.use(postRouter);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
