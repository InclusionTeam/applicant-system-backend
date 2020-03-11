'use strict';
module.exports = (sequelize, DataTypes) => {
  const sequelizeCohort = sequelize.define('Cohort', {
    start_date: DataTypes.DATE,
    is_published: DataTypes.BOOLEAN
  }, {});


  class Cohort extends sequelizeCohort {
    static async all() {
      return await this.findAll();
    }

    static async new(req, res) {
      return await this.create({
        start_date: req.body.start_date,
        is_published: true
      })
    }
  }

  Cohort.associate = function (models) {
    Cohort.hasMany(models.Form);
  };

  return Cohort;
};