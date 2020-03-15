// Add user route
exports.addUser = (req, res) => {
  res.status(201).json({ success: true, message: 'User added' });
};

// Update user route
exports.updateUser = (req, res) => {
  res.status(200).json({ success: true, message: 'Update successfully' });
};
