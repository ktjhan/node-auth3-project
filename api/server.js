const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const session = require('express-session');
// const SessionStore = require('connect-session-knex')(session);

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

const server = express();
// const sessionConfig = {
//     name: 'mario',
//     secret: 'supermario',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 60 * 60 * 1000,
//         secure: false,
//         httpOnly: true
//     },
//     store: new SessionStore({
//         knex: require('../db-config'),
//         tablename: 'sessions',
//         sidfieldname: 'sid',
//         createtable: true,
//         clearInterval: 60 * 60 * 1000
//     })
// };
//
// server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
});

module.exports = server;
