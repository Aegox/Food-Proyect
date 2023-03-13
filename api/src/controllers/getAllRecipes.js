// imports of the controllers for get recipes  of the database and the api recipes
const getRecipesApi = require('./getRecipesApi');
const getRecipesDb = require('./getRecipesDb');

//Define asynchronous concat fuction of the recipes. 
const getAllRecipes = async () => {
    try {
        const recipesApi = await getRecipesApi(); //asynchronou variable of the api recipes.
        const recipesDb = await getRecipesDb(); //asynchronou variable of the database recipes.
        const allRecipes = recipesApi.concat(recipesDb); 
        return allRecipes; //variable of the total recipes.
    } catch (err) {
        console.log(err)
    }
};

module.exports = getAllRecipes;
