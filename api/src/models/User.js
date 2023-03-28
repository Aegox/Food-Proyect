const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(1234),
            allowNull: false
        },
        passwordHash: {
            type: DataTypes.STRING(1234)
        },
        savedRecipes: {
            type: DataTypes.ARRAY(DataTypes.JSON),
        }
    },
        {timestamps: false}
)}
