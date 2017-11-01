'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Users', 'school', { type: Sequelize.STRING }).then(function() {
        return queryInterface.addColumn('Users', 'bio', { type: Sequelize.STRING }).then(function() {
            return queryInterface.addColumn('Users', 'twitter_username', { type: Sequelize.STRING }).then(function() {
                return queryInterface.addColumn('Users', 'subjects', { type: Sequelize.ARRAY(Sequelize.STRING) }).then(function() {
                    return queryInterface.addColumn('Users', 'interests', { type: Sequelize.ARRAY(Sequelize.STRING) });
                })
            })
        })
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('Users', 'school').then(function() {
        return queryInterface.removeColumn('Users', 'bio').then(function() {
            return queryInterface.removeColumn('Users', 'twitter_username').then(function() {
                return queryInterface.removeColumn('Users', 'subjects').then(function() {
                    return queryInterface.removeColumn('Users', 'interests');
                })
            })
        })
    });
  }
};
