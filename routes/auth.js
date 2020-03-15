// Authentication user route
exports.authentication = (req, res) => {
  res.status(200).json({ success: true, message: 'authentication successfully' });
};
