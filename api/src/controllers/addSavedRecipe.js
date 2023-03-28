const {User} = require('../db.js');

const addSavedRecipe = async (email, recipe) => {
    try {
        const user = await User.findOne({
            where: {
                email
            }
        });
         if (user.savedRecipes === null) {
            await User.update({savedRecipes: [recipe]},
                {
                    where: {
                        email
                }
            })
        }
        if (user.savedRecipes.find(recipeDB => recipeDB.id === recipe.id)) {
            return 'Recipe has been added'
        }
       
        await User.update({savedRecipes: [...user.savedRecipes, recipe]},
                {
                    where: {
                        email
                }
            })

    } catch (err) {
        console.log(err)
    }
};

module.exports = addSavedRecipe;
