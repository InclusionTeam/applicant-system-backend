'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define('Cohort', {
    starts: DataTypes.DATE,
    ispublished: DataTypes.BOOLEAN
  }, {});
  Cohort.associate = function (models) {
    Cohort.hasMany(models.Form);
  };
  return Cohort;
};