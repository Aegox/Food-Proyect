//IMPORTS//
const Router = require("express");
const getRecipeInformation = require("../controllers/getRecipeInformation.js");

//Define router//
const router = Router();

//Define route//
router.get("/recipes/:id", async (req, res) => {
    const {id} = req.params;
    const data = await getRecipeInformation(id);
    try {
        res.status(200).send(data);
    }
   catch(error) {
        res.status(404).send({message: error});
    }
})

//EXPORT ROUTER//
module.exports = router;
