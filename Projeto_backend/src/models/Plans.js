const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// definicao da model Plans

const Plans = sequelize.define('Plans', {
    Type: {
        type: DataTypes.STRING,
    },
    Value: {
        type: DataTypes.FLOAT,
    },
    Payment: {
        type: DataTypes.STRING,
    },
    Accession:{
        type: DataTypes.DATEONLY,
    },
},
)

//DEFINICAO DOS RELACIONAMENTOS

Plans.associate = function(models) {
    Plans.belongsToMany(models.Movies, {through:"MoviesByPlan"});
    Plans.belongsTo(models.User);
},

module.exports = Plans;
