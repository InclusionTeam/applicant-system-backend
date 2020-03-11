'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define('Cohort', {
    start_date: DataTypes.DATE
  }, {});
  Cohort.associate = function (models) {
    Cohort.hasMany(models.Form, { foreignKey: 'id', as: 'cohort' })
  };
  return Cohort;
};