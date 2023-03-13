const {Router} = require('express');
const loginUser = require('../controllers/loginUser.js');

const router = Router();

router.post('/login', async (req, res) => {
    try {
        const user = await loginUser(req.body.user);
        if (user.verify) {
            return res.status(201).json({
                message: 'User Logged!', 
                token: user.token, 
                verify: user.verify
            })
        }
        res.status(401).json({
            message: 'Invalid credentials!', 
            token: user.token,
            verify: user.verify
        })
    }
    catch(err) {
        console.log(err)
        res.status(400).json({message: err})
    }
});

module.exports = router;
