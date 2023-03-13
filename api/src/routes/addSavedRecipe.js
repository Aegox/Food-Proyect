require("dotenv").config({path: "../../.env"}) 
const {Router} = require('express');
const savedRecipes = require('../controllers/addSavedRecipe.js');
const jwt = require('jsonwebtoken');

const router = Router()
const {SECRET_JWT} = process.env;

router.put('/addRecipe', async (req, res) => {
    try {
        const authorization = req.headers.authorization;
        const {recipe} = req.body;
        console.log(recipe)
        if (authorization) {
            const token = authorization.split(' ')[1];
            const decoded = jwt.verify(token , SECRET_JWT);
            if (decoded.email) {
                await savedRecipes(decoded.email, recipe);
                return res.status(200).json({message: 'Recipe has been add'})
            }
        }
        res.status(401).json({message: 'Invalid credentials'})
        } catch (err) {
        res.status(401).json({message: 'Invalid Credentials', err})
    }
})

module.exports = router;
