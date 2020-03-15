exports.addUser = (req, res) => {
  res.status(201).jsson({ success: true, message: 'User added' });
};
