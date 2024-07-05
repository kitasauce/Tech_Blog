require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  cookie: {},
  maxAge: 300000,
  resave: false,
  sameSite:"strict",
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.get("/", (req,res) => {
  const logged_in = true
 res.render("homepage", {logged_in})
});

app.get("/signup", (req,res) => {
 const logged_in = true
 res.render("signup", {logged_in})
});

app.get("/login", (req,res) => {
 const logged_in = true
 res.render("login", {logged_in})
});

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});