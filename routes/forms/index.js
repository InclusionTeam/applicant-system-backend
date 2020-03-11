const express = require('express');
const models = require('../../database/models');
const router = express.Router();
const { Form, Cohort } = require('../../database/models');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
  res.json(await models.Form.findAll());
});

router.post('/', cors(), async (req, res) => {
  res.json(await Form.new(req));
});

module.exports = router;