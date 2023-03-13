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
