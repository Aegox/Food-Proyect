//IMPORTS// 
const {Router} = require("express");
const makeRecipe = require("../controllers/makeRecipe.js");

//Define router//
const router = Router();

//Define route//
router.post("/recipes", async (req, res) => {
    try {
        await makeRecipe(req.body);
        res.status(201).send({message: 'The recipe has been created'});
    }
    catch(error) {
        res.status(400).send({message: error});
    }
});

//MODULE EXPORT//
module.exports = router;
