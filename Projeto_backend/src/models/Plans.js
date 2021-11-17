const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// definicao da model Plans

const Plans = sequelize.define('Plans', {
    IdPlans: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    Type: {
        type: DataTypes.STRING,
    }
    Value: {
        type: DataTypes.FLOAT,
    }
    Payment: {
        type: DataTypes.STRING,
    }
    Accession:{
        type: DataTypes.DATEONLY,
    }
}

//DEFINICAO DOS RELACIONAMENTOS
