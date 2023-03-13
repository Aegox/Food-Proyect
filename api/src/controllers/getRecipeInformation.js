require("dotenv").config({path: "../../.env"}) // require the .env process.
const {Recipe, Diet} = require("../db.js"); // the model Recipe of the database.
const { API_KEY} = process.env; //Define the api key.
const fetch = require("node-fetch"); // import the method for make petitions.

const getRecipeInformation = async (ID) => {
    if (ID.length >= 10) { // if the id recipe is greather than 10,we search the recipe in the database with that id.
        return await Recipe.findOne({ 
            where: {
                id: ID
            },
            include: {// include the relationed diets with each recipes.
                model: Diet,
                attributes: ["Name"]
            }})
    }
    return await fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${API_KEY}`) // make a petition api of recipes with id recieved.
        .then(response => response.json())
        .then(response => {return { //destructure the api response and we keep the necessary information.
            id: response.id,
            title: response.title,
            image: response.image,
            summary: response.summary,
            healthScore: response.healthScore,
            allsteps: response.instructions,
            Diets: response.diets
        }})
        .catch(error => console.log(error))
};

module.exports = getRecipeInformation;
