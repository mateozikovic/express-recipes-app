var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Recipe      = require("./models/recipe"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    seedDB  = require("./seeds");

//CONFIG
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/recipes_app", { useNewUrlParser: true }); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));
seedDB();


//routes
app.get("/", function(req, res){
    res.redirect("/recipes");
});

// INDEX ROUTE - display all recipes
app.get("/recipes", function(req, res){
    Recipe.find({}, function(err, recipes){
        if(err){
            console.log(err);
        } else {
            res.render("index", {recipes: recipes});
        }
    });
});

// NEW ROUTE - show form for new recipe
app.get("/recipes/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE - save recipe into db
app.post("/recipes", function(req, res){
    req.body.recipe.description = req.sanitize(req.body.recipe.description);
    req.body.recipe.ingredients = req.sanitize(req.body.recipe.ingredients);
    req.body.recipe.preparation = req.sanitize(req.body.recipe.preparation);
    Recipe.create(req.body.recipe, function(err, createdRecipe){
        if(err){
            res.render("new");
        } else {
            res.redirect("/recipes");
            console.log(createdRecipe);
        }
    });
});

//SHOW ROUTE - show one recipe
app.get("/recipes/:id", function(req, res){
    Recipe.findById(req.params.id, function (err, foundRecipe){
       if(err){
           console.log(err);
       } else {
           res.render("show", {recipe: foundRecipe});
       }
    });    
});

//EDIT ROUTE - show edit form for one recipe
app.get("/recipes/:id/edit", function(req, res){
    Recipe.findById(req.params.id, function(err, foundRecipe){
        if(err){
            console.log(err);
            res.redirect("/recipes");
        }  else {
            res.render("edit", {recipe: foundRecipe});
        }
    });
});

//UPDATE ROUTE - update recipe
app.put("/recipes/:id", function(req, res){
    req.body.recipe.description = req.sanitize(req.body.recipe.description);
    req.body.recipe.ingredients = req.sanitize(req.body.recipe.ingredients);
    req.body.recipe.preparation = req.sanitize(req.body.recipe.preparation);
    Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, function(err, foundRecipe){
        if(err){
            res.redirect("/recipes");
            console.log(err);
        } else {
            res.redirect("/recipes/" + req.params.id);
        }
    });
});

//DELETE ROUTE - delete recipe 
app.delete("/recipes/:id", function(req, res){
    Recipe.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/recipes");
        } else {
            res.redirect("/recipes");
        }
    });
});

app.listen(3000, function(){
    console.log("Server on port 3000 has started.");
});