var mongoose = require("mongoose");
var recipeSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    ingredients: String,
    preparation: String,
    time: String,
    difficulty: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Recipe", recipeSchema);