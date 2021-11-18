const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// definicao da model User

const User = sequelize.define('User', {

    Name: {
        type: DataTypes.STRING,
        allowNull:false
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull:false
    },

    Adress: {
        type: DataTypes.STRING,
    },

    PhoneNumber: {
        type: DataTypes.STRING,
    },
},
)

//DEFINICAO DOS RELACIONAMENTOS 


User.associate = function(models) {
    User.hasOne(models.Plans);
}

module.exports = User;