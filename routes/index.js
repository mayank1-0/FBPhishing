var express = require('express');
var router = express.Router();
var authentication = require('../controllers/authenticationController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/user-login', authentication.userLogin);
// function(req, res, next) {
//   try{
//   console.log(req.body.email + req.body.password);
//   // fs.appendFile('mynewfile1.txt', req.body.email, function (err) {
//   //   if (err) throw err;
//   //   console.log('Saved!');
//   // });
//   res.send({message: 'Hurray'});
//   }
//   catch(error){
//     res.send({error: error, message: 'Murray'});
//   }
// });

module.exports = router;
