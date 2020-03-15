const router = require('express').Router();
const { addUser, updateUser } = require('./users');

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Index route' });
});

// Add user
router.get('/add', addUser);

// Update user
router.put('/update', updateUser);

module.exports = router;
