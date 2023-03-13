require("dotenv").config({path: "../../.env"}) 
const {User} = require('../db.js');
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const {SECRET_JWT} = process.env;

const loginUser = async (user) => {
    try {
        const {email, password} = user;
        const userDb = await User.findOne({
            where: {
                email: email
            },
        })

        if (userDb) {
            const valid = await bcrypt.compare(password, userDb.passwordHash)
        
            if (valid) { 
                const token = await jwt.sign({email}, SECRET_JWT, {expiresIn: 60*60*24});
                return {
                    verify: true,
                    token
                }
            }
        }

        return {
            verify: false,
            token: '',
        }; 
    } catch(err) {
        console.log(err)
    }
};

//loginUser({email:'amundaray_diego@hotmail.com', password: '131202.,'}).then(data => console.log(data))

module.exports = loginUser;
