exports.addUser = (req, res) => {
  res.status(201).json({ success: true, message: 'User added' });
};
