const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// definicao da model Plans

const Movies = sequelize.define('Movies', {
    Title: {
        type: DataTypes.STRING,
    },
    Category:{
        type: DataTypes.STRING,
    },
    AirDate:{
        type: DataTypes.DATEONLY,
    },
},
)

//DEFINICAO DOS RELACIONAMENTOS

Movies.associate = function(models) {
    Movies.belongsToMany(models.Plans, {through:"MoviesByPlan"});
},

module.exports = Movies;
