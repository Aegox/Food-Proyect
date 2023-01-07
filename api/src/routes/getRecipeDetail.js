//IMPORTS//
const Router = require("express");
const {getRecipeInformation} = require("./controllers.js");

//Define router//
const router = Router();

//Define route//
router.get("/recipes/:id", async (req, res) => {
    const {id} = req.params;
    const data = await getRecipeInformation(id);
    try {
        res.status(200).send(data);
    }
    catch (error) {
        console.log(error);
    }
})

//EXPORT ROUTER//
module.exports = router;
