const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Recipe", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING(1234),
            allowNull: false
        },
        healthScore: {
            type: DataTypes.INTEGER
        },
        allsteps: {
            type: DataTypes.ARRAY(DataTypes.STRING(1234))
        },
        createinDb: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
        {timestamps: false}
    )}
