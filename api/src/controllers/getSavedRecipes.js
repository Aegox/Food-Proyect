const {User} = require('../db.js');
const getAllRecipes = require('./getAllRecipes.js')

const getSavedRecipes = async (email) => {
    try {
        const user = await User.findOne({
            where: {
                email
            }
        })
        return user.savedRecipes
    } catch (err) {
        console.log(err)
    } 
};

module.exports = getSavedRecipes;
