// IMPORTS //
require("dotenv").config({path: "../../.env"})
const fetch = require("node-fetch");
const {Recipe , Diet, db} = require("../db.js");

// VARIABLES //
const { API_KEY} = process.env;
const recipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`;
const diets = ["Gluten Free", "Dairy free" , "Ketogenic", "Vegetarian", "Lacto Ovo Vegetarian", "Vegan", "Pescetarian", "Paleolithic", "Primal", "Low FODMAP", "Whole 30"]

// CONTROLLERS //

const getRecipesApi = async () => {
    return await fetch(recipesUrl)
        .then(response => response.json())
        .then(response => response.results.map((recipe) => {
            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                Diets: recipe.diets,
                healthScore: recipe.healthScore
            }
        }))
        .catch(error => console.log(error))
};


const getRecipesDb = async () => {
    let recipes = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ["Name"],
               
            }
        })
    
    return recipes;
};



const getAllRecipes = async () => {
    const recipesApi = await getRecipesApi();
    const recipesDb = await getRecipesDb();
   
    const allRecipes = recipesApi.concat(recipesDb)
    return allRecipes;
};

const getRecipeInformation = async (ID) => {
    if (ID.length >= 10) {
        return await Recipe.findByPk(ID)
    }
    
    return await fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(response => {return {
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

const makeRecipe = async (recipe) => {
    const {title , summary, image, healthScore, allsteps, diets} = recipe
    const newRecipe = await Recipe.create({
            title,
            image,
            summary,
            healthScore,
            allsteps
        })
        
    const newDiets = await Diet.findAll({
        where: {
            Name: diets
        }})
   
    newRecipe.addDiet(newDiets)
   
  };


const getDiets = async () => { 
    const allDiets = await Diet.findAll();
    if (!allDiets.length) {
        diets.forEach(async (diet) => await Diet.create({
            ID: diets.indexOf(diet),
            Name: diet
        }))
        return allDiets
    }
    return allDiets
}

//Export modules//
module.exports = {
    getRecipesApi,
    getRecipesDb,
    getAllRecipes,
    getRecipeInformation,
    makeRecipe,
    getDiets
}
