const router = require('express').Router();
const { addUser, updateUser } = require('./users');
const { authentication } = require('./auth');

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Index route' });
});

// Add user
router.get('/add', addUser);

// Update user
router.put('/update', updateUser);

// User authentication
router.get('/auth', authentication);


module.exports = router;
