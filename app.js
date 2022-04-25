// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require('./config/session.config')(app)


// default value for title local
const capitalized = require("./utils/capitalized");
const projectName = "recipe";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

// const ingredient = require("./routes/ingredient.routes");
// app.use("/ingredient", ingredient);

// const recipe = require("./routes/recipe.routes");
// app.use("/recipe", recipe);

const user = require("./routes/user.routes");
app.use("/user", user);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
