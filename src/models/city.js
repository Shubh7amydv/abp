'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};

 

// this get cretaed when we did 
// npx sequelize model:generate --name City --attributes name:String
// aslo some changes aooocured in migrateions folder 
// but these are not visibile in our database sbcz they ar enot still migrated 
