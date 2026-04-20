require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User.model');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existing = await User.findOne({ email: 'admin@example.com' });
  if (existing) {
    console.log('Admin already exists');
    process.exit();
  }

  await User.create({
    name: 'Super Admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  });

  console.log('Admin created: admin@example.com / admin123');
  process.exit();
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
