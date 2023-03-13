const {Router} = require('express');
const createUser = require('../controllers/createUser.js');

const router = Router();

router.post('/register', async (req, res) => {
    try {
        await createUser(req.body);
        res.status(201).json({message: 'User created!'})
    }
    catch(err) {
        console.log(err)
        res.status(400).json({message: err})
    }
});

module.exports = router;
