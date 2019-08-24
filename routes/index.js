var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Tutorial' });
});

router.get('/recommand', controller.getRecommand);
router.post('/recommand', controller.createRecommand);
router.put('/recommand/:id', controller.updateRecommand);
router.delete('/recommand', controller.deleteRecommand);

module.exports = router;
