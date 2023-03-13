require("dotenv").config({path: "../../.env"}) //require .end process.
const fetch = require("node-fetch"); // import the method for make petitions. 
const { API_KEY} = process.env; // define the api key of recipes.
const recipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`; // endpoint for make petitions.

const getRecipesApi = async () => { // asyncrhronou function to get all api recipes
    return await fetch(recipesUrl) // petition with get the fetch method.
        .then(response => response.json())
        .then(response => response.results.map((recipe) => { // make an array of the recipes.
            return { //detructured the response and we keep the necessary information.
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                Diets: recipe.diets,
                healthScore: recipe.healthScore
            }
        }))
        .catch(error => console.log(error))
};


module.exports = getRecipesApi;
