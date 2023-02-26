//IMPOERT//
const {Router} = require("express");
const getDiets = require("../controllers/getDiets.js");

//Define router//
const router = Router();

//Define route//
router.get("/diets", async (req, res) => {
    try {
        const data = await getDiets();
        res.status(200).send(data);
    }
    catch(error) {
        res.status(404).send({message: error});
    }
})

//EXPORT ROUTER//
module.exports = router;
