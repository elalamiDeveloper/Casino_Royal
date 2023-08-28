import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'User must have a name'],
    trim: true,
    lowercase: true,
    validate: {
      //works with CREATE and SAVE operations
      validator: function (el) {
        return el.length >= 4;
      },

      message: 'A Name must be at least 4 characters',
    },
  },

  password: {
    type: String,
    required: [true, 'User must have a password'],
  },

  email: {
    type: String,
    required: [true, 'User must have a password'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'email is not valid'],
  },

  birthday: {
    type: Date,
    required: [true, 'User must have a BirthDay'],
    validate: {
      //works with CREATE and SAVE operations
      validator: function (el) {
        return el.length >= 4;
      },

      message: 'A Name must be at least 4 characters',
    },
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
