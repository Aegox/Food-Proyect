require("dotenv").config();
const {Sequelize} = require("sequelize");
const modelRecipe = require("./models/Recipe.js");
const modelDiet  = require("./models/Diet.js");
const modelUser  = require("./models/User.js");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Food`, {logging: false,});

modelRecipe(sequelize);
modelDiet(sequelize);
modelUser(sequelize);

const {Recipe , Diet, User} = sequelize.models;

//Relations of Recipes with Diets//
Recipe.belongsToMany(Diet, {through: "DietRecipes",  timestamps: false});
Diet.belongsToMany(Recipe, {through: "DietRecipes",  timestamps: false});

module.exports = {
    ...sequelize.models,
    db: sequelize,
    
}
