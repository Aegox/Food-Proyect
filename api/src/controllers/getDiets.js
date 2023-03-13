//Import the model of the databe.
const {Diet} = require("../db.js");

//Define the predertemine diets.
const diets = ["Gluten Free", "Dairy free" , "Ketogenic", "Vegetarian", "Lacto Ovo Vegetarian", "Vegan", "Pescetarian", "Paleolithic", "Primal", "Low FODMAP", "Whole 30"];

const getDiets = async () => { //asynchronou function for get diets of the database.
    const allDiets = await Diet.findAll(); // get the all diets.
    if (!allDiets.length) { // if there are not diets in the database, go to create a diets.
        diets.forEach(async (diet) => await Diet.create({ //we travel the diets array and insert in the database for each diet.
            ID: diets.indexOf(diet),
            Name: diet
        }))
        return allDiets
    }
    return allDiets; //return the alll diets.

};

module.exports = getDiets;
