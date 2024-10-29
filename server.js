// Import our dependencies
const bodyParser = require("body-parser");
require("dotenv").config(); // bring in our .env vars
const express = require("express"); // web framework for node
const morgan = require("morgan"); // logger for node
const ExpenseRouter = require('./controllers/expense')
const UserRouter = require("./controllers/user");


const methodOverride = require("method-override"); // allows us to use PUT and DELETE methods
const session = require("express-session");
const MongoStore = require("connect-mongo");
// express application
const app = express();
app.use(methodOverride("_method")); 

// middleware
app.use(morgan('dev')); // logging
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
);
app.use("/expense",ExpenseRouter)
app.use("/user", UserRouter);


// Routes

app.get('/', (req, res) => {
    res.render('index.ejs');
    })
// Listen
const PORT = process.env.PORT;


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })

