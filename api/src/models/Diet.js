const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Diet", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING
        }
    },
        {timestamps: false}
)}
