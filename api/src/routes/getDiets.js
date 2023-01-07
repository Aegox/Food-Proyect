//IMPOERT//
const {Router} = require("express");
const {getDiets} = require("./controllers");

//Define router//
const router = Router();

//Define route//
router.get("/diets", async (req, res) => {
    const data = await getDiets();
    try {
        res.status(200).send(data);
    }
    catch(error) {
        console.log(error);
    }
})

//EXPORT ROUTER//
module.exports = router;
