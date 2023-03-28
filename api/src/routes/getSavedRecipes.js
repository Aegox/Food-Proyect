require("dotenv").config({path: "../../.env"}) 
const {Router} = require('express');
const getSavedRecipes = require('../controllers/getSavedRecipes.js');
const jwt = require('jsonwebtoken');

const {SECRET_JWT} = process.env;
const router = Router();


router.get('/savedRecipes', async (req, res) => {
    try{
        const authorization = req.headers.authorization;
        if (authorization) {
            const token = authorization.split(' ')[1];
            const decoded = jwt.verify(token, SECRET_JWT); 
            if (decoded.email) {
                const recipes = await getSavedRecipes(decoded.email);
                return res.status(201).json({message: 'Authorized', recipes})
            }
        }
        res.status(401).json({message: 'Invalid Credentials!'})
    } catch (err) {
        res.status(401).json({message: 'Invalid Credentials!', err})
    }
});

module.exports = router;
