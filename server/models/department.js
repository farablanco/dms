// TODO: 3.1 Deifine departments table model
//Model for departments table
module.exports = function (sequelize, Sequelize) {
    var Department = sequelize.define("departments",
        {
            dept_no: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            dept_name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            // don't add timestamps attributes updatedAt and createdAt
            timestamps: false,
            // disable the modification of table names; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true
        });

    return Department;
};