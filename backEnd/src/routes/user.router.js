
const express =require('express')
const router = express.Router();
const {registerNewUser, loginUser} = require('../controlles/user.controllers')

// Register criar novo user.
router.post('/register', registerNewUser);

module.exports = router;

router.post('/login', loginUser)

