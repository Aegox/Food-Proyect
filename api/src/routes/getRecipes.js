//IMPORTS//
const {Router} = require("express");
const getAllRecipes = require("../controllers/getAllRecipes.js");

//Define Router//
const router = Router()

//Define route//
router.get("/recipes", async (req, res) => {
    try {
        let recipes = await getAllRecipes();
        const name = req.query.name
        if (name) { // if we reciev name paremert, filter the recipes with that name.
            let recipesName = await recipes.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()))
            return res.status(200).send(recipesName);
        }
        res.status(200).send(recipes)
    }  catch (error) {
        res.status(404).send({message: error});
    }
})

//EXPORT ROUTER//
module.exports = router;

