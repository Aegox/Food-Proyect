//IMPORTS// 
const {Router} = require("express");
const {makeRecipe} = require("./controllers.js");

//Define router//
const router = Router();

//Define route//
router.post("/recipes", async (req, res) => {
    console.log(req.body)
    try {
        await makeRecipe(req.body);
        res.status(200).send("Se ha creado la receta con exito");
    }
    catch(error) {
        console.log(error);
    }
})

//MODULE EXPORT//
module.exports = router;
