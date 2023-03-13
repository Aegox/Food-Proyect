const {Recipe , Diet} = require("../db.js"); // import de models of the database.

const getRecipesDb = async () => { //asynchronou function for make petition to database.
    const recipes = await Recipe.findAll({ // we get all recipes in the database.
            include: {// include the relationed diets with each recipes.
                model: Diet,
                attributes: ["Name"]
            }
        })   
    return recipes; // return the recipes in the database.
};

module.exports = getRecipesDb;
