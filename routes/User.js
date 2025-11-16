const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, deleteUser, getProfile } = require('../controllers/User');
const { checkAuth, isAdmin } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUsers', checkAuth, isAdmin, getAllUsers);// Only admin can access
router.delete('/deleteUser/:id', checkAuth, isAdmin, deleteUser); //only admin can access
router.get('/profile', checkAuth, getProfile);

module.exports = router;