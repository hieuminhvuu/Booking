"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [
            {
                email: "123@gmail.com",
                password: "123456",
                firstName: "Cristiano",
                lastName: "Ronaldo",
                address: "Vyazemskiy 5-7, Saint-Petersburg",
                phoneNumber: "8921921733",
                gender: 1,
                image: "123asdasqweas",
                roleId: "R1",
                positionId: "P1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
