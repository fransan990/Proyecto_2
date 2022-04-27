module.exports = app => {
    const index = require("./index.routes");
    app.use("/", index);

    const ingredient = require("./ingredient.routes");
    app.use("/ingredient", ingredient);

    const recipe = require("./recipe.routes");
    app.use("/recipe", recipe);

    const user = require("./user.routes");
    app.use("/user", user);

    const comment = require("./comment.routes");
    app.use("/comment", comment);
}