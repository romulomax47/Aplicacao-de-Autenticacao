
const express =require('express')
const router = express.Router();
const {registerNewUser, loginUser, returnUserProfile} = require('../controlles/user.controllers')
const authToken = require('../middlewares/authe.middw')
// Register criar novo user.
router.post('/register', registerNewUser);

// Rota respond
router.post('/login', loginUser)

router.get('/userProfile', authToken, returnUserProfile);


module.exports = router;