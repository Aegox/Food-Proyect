//IMPORTS//
const {Router} = require("express");
const {getAllRecipes} = require("./controllers.js");

//Define Router//
const router = Router()

//Define route//
router.get("/recipes", async (req, res) => {
    let recipes = await getAllRecipes();
    const name = req.query.name
    if (name) {
        let recipesName = await recipes.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()))
        return res.status(200).send(recipesName);
    }
    res.status(200).send(recipes)
})

//EXPORT ROUTER//
module.exports = router;

