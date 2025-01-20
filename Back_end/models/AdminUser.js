const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
});

const AdminUser = mongoose.model('AdminUser', AdminUserSchema);
module.exports = AdminUser;
