exports.getUsers = (req, res) => {
  res.status(200).json({ message: "All users" });
};

exports.createUser = (req, res) => {
  res.status(201).json({ message: "Create user" });
};

exports.getUser = (req, res) => {
  res.status(200).json({ message: "Get user" });
};

exports.updateUser = (req, res) => {
  res.status(200).json({ message: "Update user" });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({ message: "Delete user" });
};
