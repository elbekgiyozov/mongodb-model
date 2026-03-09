const User = require("../models/User");

// POST /api/users
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    res.json({ message: "Foydalanuvchi o'chirildi" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
