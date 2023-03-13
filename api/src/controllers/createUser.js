const {User} = require('../db.js');
const bcrypt = require('bcryptjs');

const createUser = async (user) => {
    try {
        const {email, password} = user;
        const passwordHash = await bcrypt.hash(password, 10)
        await User.create({email, passwordHash})
    } catch(err) {
        console.log(err)
    }
};

module.exports = createUser;
