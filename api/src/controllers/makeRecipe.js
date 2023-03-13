const {Recipe , Diet} = require("../db.js"); //import the models of the database.

const makeRecipe = async (recipe) => {// asyncronou function for make a recipes.
    const {title , summary, image, healthScore, allsteps, diets} = recipe //destructure the recieved infromation.
    const newRecipe = await Recipe.create({ // we create the recipe in the database.
            title,
            image,
            summary,
            healthScore,
            allsteps
        })
        
    const newDiets = await Diet.findAll({ // we search the diets recieved in the recipe.
        where: {
            Name: diets
        }})
   
    newRecipe.addDiet(newDiets) // we insert the diets in the recipe.
   
  };

module.exports = makeRecipe;
