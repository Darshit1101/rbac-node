const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/User');
const { checkAuth, isAdmin } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUsers', checkAuth, isAdmin, getAllUsers);// Only admin can access

module.exports = router;