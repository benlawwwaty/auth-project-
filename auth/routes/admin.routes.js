const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUserRole,
  toggleUserStatus,
  deleteUser,
} = require('../controllers/admin.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');

router.use(protect, restrictTo('admin'));

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id/role', updateUserRole);
router.put('/users/:id/toggle-status', toggleUserStatus);
router.delete('/users/:id', deleteUser);

module.exports = router;
