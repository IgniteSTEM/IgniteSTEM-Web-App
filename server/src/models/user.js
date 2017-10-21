'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        school: {
            type: DataTypes.STRING,
        },
        subjects: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        interests: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        bio: {
            type: DataTypes.STRING,
        },
        twitter_username: {
            type: DataTypes.STRING,
        },
    }, {
    classMethods: {
        associate: function(models) {
        // associations can be defined here
      }
    }
    });
    return User;
};
