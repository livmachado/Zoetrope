const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// definicao da model Plans

const Movies = sequelize.define('Movies', {
    IdMovies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Title: {
        type: DataTypes.STRING,
    },
    Category:{
        type: DataTypes.STRING,
    },
    AirDate:{
        type: DataTypes.DATEONLY,
    }
}

