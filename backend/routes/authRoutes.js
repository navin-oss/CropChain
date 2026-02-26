const express = require('express');
const router = express.Router();
const { registerUser, loginUser, walletLogin, walletRegister, getNonce } = require('../controllers/authController');
const validateRegistration = require('../middleware/validateRegistration');

router.post('/register', validateRegistration, registerUser);
router.post('/login', loginUser);

// Wallet authentication routes
router.get('/nonce', getNonce);
router.post('/wallet-login', walletLogin);
router.post('/wallet-register', walletRegister);

module.exports = router;
