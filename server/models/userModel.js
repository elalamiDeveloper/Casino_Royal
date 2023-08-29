import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
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

  birthYear: {
    type: Date,
    required: [true, 'User must have a birthYear'],
    validate: {
      //works with CREATE and SAVE operations
      validator: function (el) {
        return (
          Math.floor((this.createdAt - el) / 1000 / 60 / 60 / 24 / 365) >= 18
        );
      },

      message: "You Don't have more than 18 years",
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

  bankroll: {
    type: Number,
    default: 500,
  },

  stackEnJeu: {
    type: Number,
    default: 0,
  },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  bcrypt.hash(this.password, 12, (err, hash) => {
    this.password = hash;
    next();
  });
});

// METHODS
userSchema.methods.correctPassword = async (psw, userPsw) =>
  await bcrypt.compare(psw, userPsw);

const User = mongoose.model('User', userSchema);

export default User;
